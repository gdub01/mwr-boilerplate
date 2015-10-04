import React from 'react';
import {Link, History} from 'react-router';
import reactMixin from 'react-mixin';
import Navigation from './Nav.css';

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
            <li className="pure-menu-item">Hi, {user.profile.name}</li>
            <li className="pure-menu-item"><button onClick={ this.logout } >Logout</button></li>
        </div>
      );

    } else {
      contents = (
        <div>
          <li className="pure-menu-item"><Link to="/signin">Sign in</Link></li>
          <li className="pure-menu-item"><Link to="/join">Join</Link></li>
        </div>
      );
    }

    return (
      <div className="pure-menu pure-menu-horizontal">
        <span className="pure-menu-heading pure-menu-link">Task & Tool</span>
        <ul className="pure-menu-list">
          <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
          <li className="pure-menu-item"><Link to="/plans" className="pure-menu-link">Plans</Link></li>
          <li className="pure-menu-item"><Link to="/users" className="pure-menu-link">Users</Link></li>
        </ul>
        { contents }
      </div>
    );
  }
}
