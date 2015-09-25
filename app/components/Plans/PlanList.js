//import styles from './styles.styl';

import React, { PropTypes } from 'react';
import moment from 'moment';
import {Link} from 'react-router';
//import CSSModules from 'react-css-modules';

//@CSSModules(styles)
export default class PlanList extends React.Component {
  static propTypes = {
    plans: PropTypes.array
  }

  render() {

    let plans = this.props.plans.map((plan) => {
      let formattedCreatedAt = moment(plan.createdAt).format('MMMM DD, YYYY')
      return (
        <tr key={plan._id}>
          <th><Link to={`/plan/${plan._id}`}>{plan._id}</Link></th>
          <th>{moment(plan.createdAt).format('MMMM DD, YYYY')}</th>
          <th>{plan.createdBy}</th>
          <th>{plan.title}</th>
          <th>{plan.monthlyPrice}</th>
          <th>{plan.setupPrice}</th>
        </tr>
      );
    })

    //if (!plan) return null;

    //const { _id, createdAt, createdBy, title, monthlyPrice, setupPrice } = plan;

    return (
      <div styleName="wrapper">
        <h1>Plan list - {this.props.plans.length} Total</h1>
        <Link to='/super-global-dashboard/plan/add'>Create new plan</Link>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Created At</th>
              <th>Created By</th>
              <th>Title</th>
              <th>Monthly Price</th>
              <th>Setup Price</th>
            </tr>
          </thead>
          {plans}
        </table>

      </div>
    );
  }
}
