/* global ReactMeteorData */
import React, {Component} from 'react';
import reactMixin from 'react-mixin';
import {Link} from 'react-router';
import {Users, Teams, Plans} from 'app/collections';

@reactMixin.decorate(ReactMeteorData)
export default class Demo extends Component {
  getMeteorData() {

    var handleplans = Meteor.subscribe("plans");
    var handleuser = Meteor.subscribe("users");

    return {
      Loading: (!handleplans.ready() || !handleuser.ready()), // Use handle to show loading state
      plans: Plans.find().fetch(),
      plan: Plans.findOne(),
      userCount: Meteor.users.find().fetch().length,
      currentUser: Meteor.user()

    };
  }

  onCreateClick = (e) => {
    Meteor.call('Plan.create');
  }

  render() {
    let plansCount = this.data.plans.length;

    if (this.data.Loading) {
      return (<p>Loading</p>);
    }

    return (
      <div>
        <h1>Hello Webpack!</h1>
        <p>Hi {this.data.currentUser.username || 'not logged in'} </p>
        <p>Number of users {this.data.userCount} </p>
        <p>There are {plansCount} plans</p>
        <p>Here's a plan {this.data.plan} </p>
        <p>Plan link <Link to={`/plan/${this.data.plan._id}`}>{this.data.plan._id}</Link> </p>
        <button onClick={this.onCreateClick}>Create Plan</button>
      </div>
    );
  }
}
