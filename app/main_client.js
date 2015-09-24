import React from 'react';

import 'app/methods/teams.js';
import 'app/methods/users.js';
import 'app/methods/plans.js';

import {Routes} from './routes';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

console.log('Running on client only');
