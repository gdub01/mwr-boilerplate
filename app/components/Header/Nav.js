import React from 'react';
import {Link, History} from 'react-router';
import reactMixin from 'react-mixin';
import menu from '../../globalstyles/menu.css';
import nav from './nav.css';


export default class Nav extends React.Component {
  render() {
    const user = this.props.user;
    let rightSide;

    if (user) {

      rightSide = (
        <div className="pure-u-1-3">
          <div className="pure-menu pure-menu-horizontal">
            <ul className="pure-menu-list float-right">
              <li className="pure-menu-item pure-menu-has-children">
                <a href="#" onClick={this.props.handleDropDownClick} className="pure-menu-link" ><i className="fa fa-ellipsis-v"></i></a>
                { this.props.showDropDown ? <DropDown /> : null }
              </li>
              <li className="pure-menu-item"><a href="#" onClick={this.props.handleDropDownClick} ><img src={user.profile.avatar} className="img-avatar" /></a></li>
            </ul>
          </div>
        </div>
      );

    } else {
      rightSide = (
        <div className="pure-u-1-3">
          <div className="pure-menu pure-menu-horizontal">
            <ul className="pure-menu-list float-right">
              <span className="pure-menu-separator"></span>
              <li className="pure-menu-item"><Link to="/signin" className="pure-menu-link">Sign in</Link></li>
              <li className="pure-menu-item"><Link to="/join" className="pure-menu-link">Join</Link></li>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className="pure-g">
        <div className="pure-u-2-3">
          <div className="pure-menu pure-menu-horizontal">
            <a href="#" onClick={this.props.handleMenuClick} className="pure-menu-heading pure-menu-link"><i className="fa fa-bars"></i> Menu</a>
            <ul className="pure-menu-list">
              <li className="pure-menu-item pure-menu-separator"></li>
              <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
              <li className="pure-menu-item"><Link to="/plans" className="pure-menu-link">Plans</Link></li>
              <li className="pure-menu-item"><Link to="/users" className="pure-menu-link">Users</Link></li>
            </ul>
          </div>
        </div>
        { rightSide }
      </div>
    );
  }
}

@reactMixin.decorate(History)
class DropDown extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    Meteor.logout();
    this.history.pushState(null, `/`);
  }

  render() {
    return (
      <ul className="pure-menu-children">
        <li className="pure-menu-item"><a href="#" onClick={this.logout} className="pure-menu-link">Logout</a></li>
        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Profile</a></li>
      </ul>
    );
  }
}

class Menu extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-3">
          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
              <li className="pure-menu-item"><Link to="/plans" className="pure-menu-link">Plans</Link></li>
              <li className="pure-menu-item"><Link to="/users" className="pure-menu-link">Users</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
