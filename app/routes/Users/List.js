import React from 'react';
import UserList from '../../components/Users/UserList';
import reactMixin from 'react-mixin';
import {Users} from '../../collections';

@reactMixin.decorate(ReactMeteorData)
export default class UserListRoute extends React.Component {

  getMeteorData() {
    let handle = Meteor.subscribe("users");
    return {
      users: Meteor.users.find().fetch(),
      loading: !handle.ready()
    };
  }

  render() {
    if (this.data.loading) {
      return (<p>'loading'</p>);
    }
    return (
      <UserList users={this.data.users} />
    )
  }
}
