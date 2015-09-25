import React from 'react';
import {Link} from 'react-router';
import SignIn from 'app/components/Users/SignIn';

export default class SignInRoute extends React.Component {

  logout() {
    Meteor.logout();
    // this.history.pushState(null, `/`); *Waiting for react-router decorators in 1.x
  }

  render() {
    if (Meteor.user()) {
      return (
        <div>
          <p>You're currently signed in.</p>
          <button onClick={ this.logout } >Logout</button>
        </div>
      )
    }
    return (
      <Signin />
    )
  }
}
