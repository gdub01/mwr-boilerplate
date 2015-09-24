import {Plans, Teams, Users} from 'app/collections';

Meteor.publish('plans', function() {
  //if (isAdmin(this.userId)) {
  //  return Plans.find();
  //} else {
  //  return Plans.find({isDeleted: false});
  //}
  return Plans.find();
});

//Meteor.publish('myTeams', function(user) {
  // return Teams.find({flagged: false, user: user});
  // on the client
  // Meteor.subscribe('posts', 'bob-smith');
//});

 Meteor.publish('users', function() {
   return Meteor.users.find();
 });
