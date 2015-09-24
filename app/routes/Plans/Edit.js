import React, { PropTypes } from 'react';
import PlanEditor from '../../components/Plans/PlanEditor';
import reactMixin from 'react-mixin';
import {Plans} from 'app/collections';

@reactMixin.decorate(ReactMeteorData)
export default class PostsEdit extends React.Component {
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
      <PlanEditor
        plan={this.data.plan}
      />
    );
  }
}
