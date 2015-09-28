import {Teams, Users} from 'app/collections';

import 'app/methods/teams.js';
import 'app/methods/users.js';
import 'app/methods/plans.js';

import 'app/publications/publications.js';

import 'app/Utils/EmailTemplates.js';
import 'app/Utils/CreateUser.js';

Meteor.startup(function () {

  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
      $set: {
        clientId: x,
        loginStyle: "popup",
        secret: x
      }
    }
  );
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: x,
        loginStyle: "popup",
        secret: x
      }
    }
  );
  ServiceConfiguration.configurations.upsert(
    { service: "twitter" },
    {
      $set: {
        consumerKey: x,
        loginStyle: "popup",
        secret: x
      }
    }
  );
});



console.log('\n\nRunning on server only');
