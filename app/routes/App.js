import React, {Component} from 'react';
import Nav from '../components/Header/Nav';
import Sidebar from '../components/Sidebar/Sidebar';
import reactMixin from 'react-mixin';

import Normalize from '../globalstyles/normalize.css'
import Typography from '../globalstyles/typography.css'


@reactMixin.decorate(ReactMeteorData)
export default class App extends Component {
  constructor() {
    super();
    this.dropdownClick = this.dropdownClick.bind(this);
    this.showSidebarClick = this.showSidebarClick.bind(this);
    this.state = {
      showDropDown: false,
      showSidebar: true
    };
  }

  dropdownClick() {
    this.setState({showDropDown: !this.state.showDropDown})
  }

  showSidebarClick() {
    this.setState({showSidebar: !this.state.showSidebar})
  }

  getMeteorData() {
    return {
      user: Meteor.user()
    };
  }

  render() {

    return (
      <div>
        <Nav user={this.data.user}
            showDropDown={this.state.showDropDown}
            handleMenuClick={this.showSidebarClick}
            handleDropDownClick={this.dropdownClick}  />
        { this.state.showSidebar ? <Sidebar user={this.data.user} /> : null }
        {this.props.children}
      </div>
    );
  }
}
