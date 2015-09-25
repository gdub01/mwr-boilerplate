import {Plans} from '../collections';

var schema = {
  _id: String,
  createdAt: Date,
  updatedAt: Date,
  createdBy: String, //userID
  title: String,
  desc: String,
  monthlyPrice: Number,
  setupPrice: Number,
  maxProjects: Number, // 0 for unlimited
  maxItems: Number, // 0 for unlimited
  freeTrialDays: Number, // 0 for no free trial. Length in days
  teamsUsingItCount: Number,
  currAvail: Boolean, // for allowing grandfathered plans to continue
  custom: Boolean, // Useful for creating unique plans not normally available
  isDeleted: Boolean //Soft delete
};

// Plan Model
//
// Example:
//
//   Meteor.call('Plan.create' {
//     desc: 'Hello World',
//   });
//
//   Meteor.call('Plan.update', '1234', {
//     desc: 'Goodbye World',
//   });


Meteor.methods({
  /**
   * Creates a Plan document
   * @method
   * @param {object} data - data to insert
   * @param {object} data.desc - plan text content
   * @param {object} data.userName - plan owner username
   * @returns {string} of document id
   */
  "Plan.create": function(data) {
    var docId;

    if (!this.userId) throw new Meteor.Error(401, "Login required");

    data.createdBy = this.userId; // XXX cleanup
    data.createdAt = new Date();
    data.updatedAt = new Date();
    data.title = data.title;
    data.desc = data.desc;
    data.monthlyPrice = data.monthlyPrice;
    data.setupPrice = data.setupPrice;
    data.maxProjects = data.maxProjects;
    data.maxItems = data.maxItems;
    data.freeTrialDays = data.freeTrialDays;
    data.teamsUsingItCount = 0;
    data.currAvail = data.currAvail;
    data.custom = data.custom;
    data.isDeleted = false;

    // ensure user doesn't send extra/evil data
    // ignore _id since it's not created yet
    check(data, _.omit(schema, '_id'));

    docId = Plans.insert(data);

    console.log("[Plan.create]", docId);
    return docId;
  },


  /**
   * Updates a Plan document using $set. Also soft deletes plans.
   * @method
   * @param {string} docId - The doc id to update
   * @param {object} data - data to update
   * @returns {number} of documents updated (0|1)
   */
  "Plan.update": function(docId, data) {
    var count, selector;
    var optional = Match.Optional;

    check(docId, String);
    if (!this.userId) throw new Meteor.Error(401, "Login required");
    data.updatedAt = new Date();

    // whitelist what can be updated
    check(data, {
      updatedAt: schema.updatedAt,
      currAvail: optional(schema.currAvail),
      custom: optional(schema.custom),
      isDeleted: optional(schema.isDeleted)
    });

    // if caller doesn't own doc, update will fail because fields won't match
    selector = {_id: docId, createdBy: this.userId};

    count = Plans.update(selector, {$set: data});

    console.log("  [Plan.update]", count, docId);
    return count;
  },



  /**
   * Increment a field on Plan doc, only allow teamsUsingItCount to pass for now
   * @method
   * @param {string} docId - The doc id to like
   * @returns {number} of documents updated (0|1)
   */
  "Plan.increment": function(docId, fieldName) {
    check(fieldName, "teamsUsingItCount");
    if (User.loggedOut()) throw new Meteor.Error(401, "Login required");

    var incField = {};
    incField[fieldName] = 1;
    var count = Plans.update({_id: docId}, {$inc: incField });

    console.log("Plan.increment]", count);
    return count;
  },
});
