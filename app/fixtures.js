/* global Accounts */
import {Teams} from './collections';

export function createTeams() {
  console.log('Creating fake teams');
  [1, 2, 3, 4].forEach(function(count) {
    Teams.insert({
      name: 'Test team # ' + count,
      desc: 'How now brown cow',
    });
  });
}

export function createUsers() {
  console.log('Creating fake users');
  ['Bob', 'Jane', 'Max'].forEach(function(name) {
    Accounts.createUser({
      username: name,
      password: 'password',
      profile: {},
    });
  });
}
