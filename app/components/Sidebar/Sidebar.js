import React from 'react';
import {Link, History} from 'react-router';
import reactMixin from 'react-mixin';
import menu from '../../globalstyles/menu.css';
import sidebar from './sidebar.css';

export default class Sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    const user = this.props.user;
    let content;

    if (user) {
      content = (
        <div className="pure-menu">
          <ul className="pure-menu-list">
            <li className="pure-menu-item">{user.profile.name}</li>
          </ul>
        </div>
      );
    } else {
      content = (
        <div className="pure-u-1-3">
          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Browse</Link></li>
              <li className="pure-menu-item"><Link to="/join" className="pure-menu-link">Get Started</Link></li>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className="pure-g">
        <div className="pure-u-1-6">
          <div className="pure-menu">
            <a href="#" onClick={this.menuClick} className="pure-menu-heading pure-menu-link">Task & Tool</a>
            <ul className="pure-menu-list">
              <li className="pure-menu-item pure-menu-separator"></li>
              <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
              <li className="pure-menu-item"><Link to="/plans" className="pure-menu-link">Plans</Link></li>
              <li className="pure-menu-item"><Link to="/users" className="pure-menu-link">Users</Link></li>
            </ul>
          </div>
        </div>
        { content }
      </div>
    );
  }
}
