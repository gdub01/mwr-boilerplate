# Boilerplate SaaS app built on meteor-webpack-react

<<<<<<< HEAD
This is a bit of boilerplate based on https://github.com/jedwards1211/meteor-webpack-react ... which is fantastic work. You'll want to give it a look first.
=======
This is a Meteor project skeleton where the client (in React) and server get built by Webpack.  In dev mode,
webpack-dev-server is used with [react-transform](https://github.com/gaearon/babel-plugin-react-transform).  There are a bunch of run and build scripts to make things more convenient.

<<<<<<< HEAD
Meteor's builtin ES6 support doesn't allow you to `import`(/`require`), but **with this project you can use all ES6 features on client and server today**, thanks to Webpack.  There are even source maps on the server thanks to https://github.com/evanw/node-source-map-support!  
>>>>>>> master
=======
Meteor's builtin ES2015 support doesn't allow you to `import`(/`require`), but **with this project you can use all ES2015/ES7 features supported by Babel/corejs/regenerator on the client and server today**, thanks to Webpack.  There are even source maps on the server thanks to https://github.com/evanw/node-source-map-support!  
>>>>>>> master

For those new to the react/meteor combo, it's got, among other things:

* optimistic UI (changes reflected immediately and synced with the server behind the scenes)
* universal/isomorphic
* ability to make an app via react native or cordova relatively quickly

<<<<<<< HEAD
This boilerplate gives a way of:
=======
* `require`/ES2015 `import` let you avoid Meteor global variables/load order issues
* `react-transform` reloads React components without reloading the entire page
  when you make changes
* If you `require` your styles with Webpack, it will also reload them without
  reloading the entire page when you make changes to them
* Using an npm module in the browser is as simple as `npm install` and `require`
  * This puts a large part of the React ecosystem (which revolves around Webpack/npm)
    at your fingertips
* Other Webpack loaders are great too, for example:
  * you can break up your CSS into one file per React component, and then `require`
    them in your JSX files
  * or if you want to use Sass, you can `require` the Sass files
  * or you can use `url-loader` to `require` an image file and get a URL to stick in
    an `<img>` tag
* If you use Webpack for your server code too, both the server and the client can `require`
  shared code.  This way you can avoid creating global variables for Meteor collections or
  anything else
>>>>>>> master

* structuring the app
* schema definition
* permissions/roles
* implementing social auth with fb, twitter, google, gravatar. Saves avatar images to the profile, allows uploading new profile images, etc.
* user setup/profiles/lists
* implementing image uploads to s3

<<<<<<< HEAD
This boilerplate uses:
=======
The `dev.js`, `prod.js`, and `deploy.js` scripts will run Webpack, and symbolically link the generated bundles
into the `meteor_core` directory.
>>>>>>> master

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

<<<<<<< HEAD
I think relay/graphql will overtake flux at some point in the next year. Planning on holding off until that happens. I believe the app is easy enough to reason about as is.
=======
```
> npm install
> node dev.js
```
Make sure to wait for Meteor to say it's listening, for the client `webpack-dev-server` and server `webpack --watch` to print out module/bundle info.  The site won't work until all are ready.
>>>>>>> master

This is both my first meteor and react app and is a sample for my own learning.. it's nowhere near ready yet... but please feel free to use it and/or make pull requests as you like.

<<<<<<< HEAD
MIT licence.
=======
```
> npm install -g node-inspector
> npm install
> node debug.js
```
Then visit `http://127.0.0.1:8080/debug?port=5858` in your browser.
>>>>>>> master


<<<<<<< HEAD
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
=======
```
> npm install
> node prod.js
```
Make sure to wait for Meteor to say it's listening, and for the client and server `webpack --watch` processes to print out module/bundle info.  The site won't work until all are ready.
>>>>>>> master

See how the settings are pulled in in app/main_server.js
=======

## Deployment

You can set the project name in `projectName.js`.  It defaults to
the project folder name.

There is a deployment script that supports several common options:
```
node deploy.js meteor.com
```
The usual basic meteor.com deploy

```
node deploy.js modulus
```
Uses modulus (make sure to go into the deploy script and replace `your_app_proj_name` with a real value

```
node deploy.js mup
```
See `deploy.js` for some additional hints

```
node deploy.js demeteorizer
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
<<<<<<< HEAD
>>>>>>> master
=======

## Acknowledgements

(if I've forgotten anyone let me know!)

Thanks to:
* @AdamBrodzinski- for a lot of contributions (esp. deployment) and promotion
* Luigi Maselli (@grigio) - for writing the first scripts and showing me how to deal with the Meteor vs. ES2015 Number polyfill issue
* @jbbr - for presenting good workarounds for several issues
>>>>>>> master
