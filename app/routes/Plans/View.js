import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import {Plans} from 'app/collections';
import SinglePlan from '../../components/Plans/SinglePlan';

@reactMixin.decorate(ReactMeteorData)
export default class PlanView extends Component {

  static propTypes = {
    params: PropTypes.object
  }

  getMeteorData() {
    Meteor.subscribe("plans");
    return {
      plan: Plans.findOne(this.props.params.id),
    };
  }

  render() {
    return (
      this.data.plan ?
        <SinglePlan plan={this.data.plan} />
        :
        null
    );
  }
}
