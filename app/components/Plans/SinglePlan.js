//import styles from './styles.styl';

import React, { PropTypes } from 'react';
import moment from 'moment';
//import CSSModules from 'react-css-modules';

//@CSSModules(styles)
export default class SinglePlan extends React.Component {
  static propTypes = {
    plan: PropTypes.object
  }

  render() {
    const { plan } = this.props;

    if (!plan) return null;

    const { _id, createdAt, updatedAt, createdBy, title, desc, monthlyPrice, setupPrice,
              maxProjects, maxItems, freeTrialDays, teamsUsingItCount, currAvail, custom,
              isDeleted } = plan;

    return (
      <div styleName="wrapper">
        <ul>
          <li>_id: {_id}</li>
          <li>createdAt: {moment({createdAt}).format('MMMM DD, YYYY')}</li>
          <li>updatedAt: {moment({updatedAt}).format('MMMM DD, YYYY')}</li>
          <li>createdByUserId: {createdBy}</li>
          <li>title: {title}</li>
          <li>desc: {desc}</li>
          <li>monthlyPrice: {monthlyPrice}</li>
          <li>setupPrice: {setupPrice}</li>
          <li>maxProjects: {maxProjects}</li>
          <li>maxItems: {maxItems}</li>
          <li>freeTrialDays: {freeTrialDays}</li>
          <li>teamsUsingItCount: {teamsUsingItCount}</li>
          <li>currAvail: {currAvail ? 'yes' : 'no'}</li>
          <li>custom: {custom ? 'yes' : 'no'}</li>
          <li>isDeleted: {isDeleted ? 'yes' : 'no'}</li>
        </ul>
      </div>
    );
  }
}
