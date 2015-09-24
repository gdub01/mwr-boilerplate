import {Teams} from '../collections';

var schema = {
  _id: String,
  createdAt: Date,
  updatedAt: Date,
  ownerId: String,
  userName: String,
  desc: String,
  likeCount: Number,
  commentCount: Number
};

// optionally run hook to log, audit, or denormalize mongo data
//Teams.after.insert(function (userId, doc) {
//  console.log("Inserted Doc", userId, doc);
//});

// Team Model
//
// Example:
//
//   Meteor.call('Team.create' {
//     desc: 'Hello World',
//   });
//
//   Meteor.call('Team.update', '1234', {
//     desc: 'Goodbye World',
//   });


Meteor.methods({
  /**
   * Creates a Team document
   * @method
   * @param {object} data - data to insert
   * @param {object} data.desc - team text content
   * @param {object} data.userName - team owner username
   * @returns {string} of document id
   */
  "Team.create": function(data) {
    var docId;
    if (!this.userId) throw new Meteor.Error(401, "Login required");

    data.ownerId = this.userId; // XXX cleanup
    data.createdAt = new Date();
    data.updatedAt = new Date();
    data.likeCount = 0;
    data.commentCount = 0;

    // ensure user doesn't send extra/evil data
    // ignore _id since it's not created yet
    check(data, _.omit(schema, '_id'));

    docId = Teams.insert(data);

    console.log("[Team.create]", docId);
    return docId;
  },


  /**
   * Updates a Team document using $set
   * @method
   * @param {string} docId - The doc id to update
   * @param {object} data - data to update
   * @returns {number} of documents updated (0|1)
   */
  "Team.update": function(docId, data) {
    var count, selector;
    var optional = Match.Optional;

    check(docId, String);
    if (User.loggedOut()) throw new Meteor.Error(401, "Login required");
    data.updatedAt = new Date();

    // whitelist what can be updated
    check(data, {
      updatedAt: schema.updatedAt,
      desc: optional(schema.desc),
      commentCount: optional(schema.commentCount),
      likeCount: optional(schema.likeCount)
    });

    // if caller doesn't own doc, update will fail because fields won't match
    selector = {_id: docId, ownerId: User.id()};

    count = Teams.update(selector, {$set: data});

    console.log("  [Team.update]", count, docId);
    return count;
  },


  /**
   * Destroys a Team
   * @method
   * @param {string} docId - The doc id to destroy
   * @returns {number} of documents destroyed (0|1)
   */
  "Team.destroy": function(docId) {
    check(docId, String);

    if (User.loggedOut()) throw new Meteor.Error(401, "Login required");

    // if caller doesn't own doc, destroy will fail because fields won't match
    var count = Teams.remove({_id: docId, ownerId: User.id()});

    console.log("  [Team.destroy]", count);
    return count;
  },


  /**
   * Naive implementation of increment like count by 1
   * this will not check for multiple like by the same person or
   * even track who liked it. Perhaps after releasing we can fix this
   *
   * @method
   * @param {string} docId - The doc id to like
   * @returns {number} of documents updated (0|1)
   */
  "Team.like": function(docId) {
    check(docId, String);
    if (User.loggedOut()) throw new Meteor.Error(401, "Login required");

    var count = Teams.update({_id: docId}, {$inc: {likeCount: 1} });

    console.log("  [Team.like]", count);
    return count;
  },

  /**
   * Increment a field on Team doc, only allow comments to pass for now
   * @method
   * @param {string} docId - The doc id to like
   * @returns {number} of documents updated (0|1)
   */
  "Team.increment": function(docId, fieldName) {
    check(fieldName, "commentCount");
    if (User.loggedOut()) throw new Meteor.Error(401, "Login required");

    var incField = {};
    incField[fieldName] = 1;
    var count = Teams.update({_id: docId}, {$inc: incField });

    console.log("Team.increment]", count);
    return count;
  },
});
