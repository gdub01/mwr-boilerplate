# meteor-webpack-react

This is a bit of boilerplate based on https://github.com/jedwards1211/meteor-webpack-react ... which is fantastic work. You'll want to give it a look first.

For those new to the react/meteor combo, it's got, among other things:

* optimistic UI (changes reflected immediately and synced with the server behind the scenes)
* universal/isomorphic
* ability to make an app via react native or cordova relatively quickly

This boilerplate gives a way of:

* structuring the app
* schema definition
* permissions/roles
* implementing social auth with fb, twitter, google, gravatar. Saves avatar images to the profile, allows uploading new profile images, etc.
* user setup/profiles/lists
* implementing image uploads to s3

This boilerplate uses:

* react-router
* es6 classes, es7 decorators
* slingshot for s3 uploads (meteor package)
* ... full list in packages.json for npm stuff plus meteor-specific packages in meteor_core/.meteor/packages

I'm planning on adding:

* stripe integration
* SSR
* tests
* a bunch of other random changes
* styling =)

You can use this if:

* You want an isomorphic starter app that includes handling users, creating Saas plans and integrating with stripe. In this case, you'll clone it and then add collections/components/methods/routes/etc for the actual things you want the users to do. This starter just includes user management/roles/plans.
* Or.. you want to copy/paste a few items surrounding users/auth/etc in react/meteor

Basic setup of /app folder:

* Routes folder handles routing and includes pages that are all data fetching components
* Components folder handles displaying components and styling
* Publications is essentially the R in CRUD and handles reading permissions
* Methods is pretty much the CUD in CRUD and handles the collections' schemas and permissions
* Collections just defines the MongoDB collections
* Styles has global styles. Styling for individual components is imported directly into that component from the component dir
* Utils sets up a few things that don't belong anywhere else

A note on flux/Redux:

I'm waiting to see how graphql/relay pans out a little more before trying to implement redux here. Reason being meteor stores data on a minimongo already so you either have to duplicate that data or just try to store state but not database data which isn't super redux-y. Relay/graphql may be a better fit with meteor eventually and I think fairly easy to switch to. 

This is both my first meteor and react app and is a sample for my own learning.. it's nowhere near ready yet... but please feel free to use it and/or make pull requests as you like.

MIT licence.


## Installing

* git clone git@github.com:gdub01/mwr-boilerplate.git
* npm install
* create a settings folder with devel.json, prod.json and stage.json with your social auth and aws s3 keys.
* type './dev' in your console to start it up.
* definitely look at this: https://github.com/jedwards1211/meteor-webpack-react to see what's going on and how to deploy (it's pretty fun and painless. Meteor is launching their own hosting service, galaxy, soon too and you'll be able to deploy it there.)

Sample devel.json file:

{
  "public": {
    "env": "DEVEL",
    "foo": "bar"
  },
  "googleSecret": "key",
  "googleClientID": "key",
  "twitterSecret": "key",
  "twitterClientID": "key",
  "facebookSecret": "key",
  "facebookClientID": "key",
  "AWSAccessKeyId": "key",
  "AWSSecretAccessKey": "key"
}

See how the settings are pulled in in app/main_server.js
