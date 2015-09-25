import React from 'react';
import Join from 'app/components/Users/Join';

export default class JoinRoute extends React.Component {

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
      <Join />
    )
  }
}
