import {Teams, Users} from 'app/collections';

import 'app/methods/teams.js';
import 'app/methods/users.js';
import 'app/methods/plans.js';

import 'app/publications/publications.js';

import 'app/utils/EmailTemplates.js';
import 'app/utils/CreateUser.js';
import 'app/utils/ImageUploadPermissions.js';
import 'app/utils/ImageUploads.js';

Meteor.startup(function () {

  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
      $set: {
        clientId: Meteor.settings.googleClientID,
        loginStyle: "popup",
        secret: Meteor.settings.googleSecret
      }
    }
  );
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: Meteor.settings.facebookClientID,
        loginStyle: "popup",
        secret: Meteor.settings.facebookSecret
      }
    }
  );
  ServiceConfiguration.configurations.upsert(
    { service: "twitter" },
    {
      $set: {
        consumerKey: Meteor.settings.twitterClientID,
        loginStyle: "popup",
        secret: Meteor.settings.twitterSecret
      }
    }
  );
});



console.log('\n\nRunning on server only');
