import React, { PropTypes } from 'react';
import PlanCreator from '../../components/Plans/PlanCreator.js';
import {Plans} from 'app/collections';

export default class PlanCreate extends React.Component {

  render() {
    return (
      <PlanCreator />
    );
  }
}
