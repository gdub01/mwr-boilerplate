import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import {Users} from 'app/collections';
import UserProfile from '../../components/Users/UserProfile';

@reactMixin.decorate(ReactMeteorData)
export default class UserProfileRoute extends Component {

  static propTypes = {
    params: PropTypes.object
  }

  getMeteorData() {
    let handle = Meteor.subscribe("users");
    return {
      loading: !handle.ready(),
      user: Meteor.users.findOne(this.props.params.id)
    };
  }

  render() {
    if (this.data.loading) {
      return (
        <p>Loading</p>
      );
    }

    return (
        <UserProfile user={this.data.user} />
    );
  }
}
