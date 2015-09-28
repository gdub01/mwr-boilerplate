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
        clientId: "382737577331-prgl46ecnqpot7c2cuvuofnsh3o3ctrd.apps.googleusercontent.com",
        loginStyle: "popup",
        secret: "jX6uPGjOCwnOyiG2-xmrqliU"
      }
    }
  );
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: "446309738738517",
        loginStyle: "popup",
        secret: "6243afe1305dc7a129bdc77c7ddea778"
      }
    }
  );
  ServiceConfiguration.configurations.upsert(
    { service: "twitter" },
    {
      $set: {
        consumerKey: "cts2YhYdObADO3Tc2Yzvho2ld",
        loginStyle: "popup",
        secret: "WtJMQb74dm7yQk0qjfGd4xW5o43TfYfd4ELNZcXj8OHGQwOwaZ"
      }
    }
  );
});



console.log('\n\nRunning on server only');
