# Boilerplate SaaS app built on meteor-webpack-react

<<<<<<< HEAD
This is a bit of boilerplate based on https://github.com/jedwards1211/meteor-webpack-react ... which is fantastic work. You'll want to give it a look first.
=======
This is a Meteor project skeleton where the client (in React) and server get built by Webpack.  In dev mode,
webpack-dev-server is used with [react-transform](https://github.com/gaearon/babel-plugin-react-transform).  There are a bunch of run and build scripts to make things more convenient.

Meteor's builtin ES6 support doesn't allow you to `import`(/`require`), but **with this project you can use all ES6 features on client and server today**, thanks to Webpack.  There are even source maps on the server thanks to https://github.com/evanw/node-source-map-support!  
>>>>>>> master

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
* mongodb
* es6 classes, es7 decorators
* slingshot for s3 uploads (meteor package)
* ... full list in packages.json for npm stuff plus meteor-specific packages in meteor_core/.meteor/packages

I'm planning on adding:

* stripe integration
* SSR
* tests

You can use this if:

* You want an isomorphic starter app that includes handling users, creating Saas plans and eventually integrating with stripe. In this case, you'll clone it and then add collections/components/methods/routes/etc for the actual things you want the users to do. This starter just includes user management/roles/plans.
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

I think relay/graphql will overtake flux at some point in the next year. Planning on holding off until that happens. I believe the app is easy enough to reason about as is.

This is both my first meteor and react app and is a sample for my own learning.. it's nowhere near ready yet... but please feel free to use it and/or make pull requests as you like.

MIT licence.


## Installing

<<<<<<< HEAD
* git clone git@github.com:gdub01/mwr-boilerplate.git
* npm install
* create a settings folder with devel.json, prod.json and stage.json with your social auth and aws s3 keys.
* type './dev' in your console to start it up.
* definitely look at this: https://github.com/jedwards1211/meteor-webpack-react to see what's going on and how to deploy (it's pretty fun and painless. Meteor is launching their own hosting service, galaxy, soon too and you'll be able to deploy it there.)

Sample devel.json file:

`{
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
}`

See how the settings are pulled in in app/main_server.js
=======

## Deployment

Big thanks to Adam Brodzinski for creating a deployment script!

There is a deployment script that supports several common options:
```
./deploy my-app.meteor.com
```
The usual basic meteor.com deploy

```
./deploy modulus
```
Uses modulus (make sure to go into the deploy script and replace `your_app_proj_name` with a real value

```
./deploy mup
```
See deploy script for some additional hints

```
./deploy demeteorizer
```
Builds with demeteorizer


## Meteor Settings

Put your settings in `settings/devel.json` & `settings/prod.json` and they will automatically load when running in development, production and build modes.


## Running Meteor Commands

As a convenience you can run `./met` in the root directory to run the `meteor` command. However you can still `cd meteor_core` and then run `meteor` from that directory as well.

```
./met  --version
./met search simple-schema
```
>>>>>>> master
