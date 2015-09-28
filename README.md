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
* implementing social auth with fb, twitter, google
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
* a bunch of other random changes
* styling =)

This is both my first meteor and react app and is a sample for my own learning.. it's nowhere near ready yet... but please feel free to use it and/or make pull requests as you like.

MIT licence.


## Installing

* git clone git@github.com:gdub01/mwr-boilerplate.git
* npm install
* create a settings folder with devel.json, prod.json and stage.json with your social auth and aws s3 keys.
* type './dev' in your console to start it up.

Basic setup of /app folder:

* Routes folder handles routing and includes pages that are all data fetching components
* Components folder handles displaying components and styling
* Publications is essentially the R in CRUD and handles the collections' schemas permissions
* Methods is pretty much the CUD in CRUD and handles permissions
* Collections just defines the MongoDB collections
* Styles has global styles
* Utils sets up a few things that don't belong anywhere else
