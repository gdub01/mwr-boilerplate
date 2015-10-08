Slingshot.createDirective("userImages", Slingshot.S3Storage, {
  bucket: "revise-local",

  acl: "public-read",

  authorize: function () {
    var user = Meteor.users.findOne(this.userId);
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },

  key: function (file) {
    var user = Meteor.users.findOne(this.userId);
    return user._id + "/" + file.name;
  }
});
