import React from 'react';
import {Link, History} from 'react-router';

export default class Nav extends React.Component {

  logout() {
    Meteor.logout();
    // this.history.pushState(null, `/`); *Waiting for react-router decorators in 1.x
  }

  render () {
    const user = Meteor.user();
    let contents;

    if (user) {
      const email = user.emails[0].address;
      const emailUsername = email.substring(0, email.indexOf('@'));

      contents = (
        <div>
            Hi, <Link to={`/user/${user._id}`}>{ emailUsername }</Link>  <br />
            <button onClick={ this.logout } >Logout</button>
        </div>
      );

    } else {
      contents = (
        <div>
          <Link to="/signin">Sign in</Link> <br />
          <Link to="/join">Join</Link>
        </div>
      );
    }

    return (
      <div>
        <h1>Brand Name</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/plans">Plans</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
        { contents }
      </div>
    );
  }
}
