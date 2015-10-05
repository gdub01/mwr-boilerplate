import {Teams, Users} from './collections';

import './methods/teams.js';
import './methods/users.js';
import './methods/plans.js';

import './publications/publications.js';

import './utils/EmailTemplates.js';
import './utils/CreateUser.js';
import './utils/ImageUploadPermissions.js';
import './utils/ImageUploads.js';

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
