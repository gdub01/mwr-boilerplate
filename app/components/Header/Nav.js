import React from 'react';
import {Link, History} from 'react-router';
import reactMixin from 'react-mixin';

@reactMixin.decorate(History)
export default class Nav extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    Meteor.logout();
    this.history.pushState(null, `/`);
  }

  render() {
    const user = this.props.user;
    let contents;

    if (user) {

      contents = (
        <div>
            Hi, {user.profile.name}
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
