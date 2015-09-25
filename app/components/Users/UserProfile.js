//import styles from './styles.styl';

import React, { PropTypes } from 'react';
import moment from 'moment';
//import CSSModules from 'react-css-modules';

//@CSSModules(styles)
export default class UserProfile extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  render() {
    const { user } = this.props;

    if (!user) return null;

    const { _id, createdAt } = user;

    return (
      <div styleName="wrapper">
        <ul>
          <li>_id: {_id}</li>
          <li>createdAt: {moment({createdAt}).format('MMMM DD, YYYY')}</li>
        </ul>
      </div>
    );
  }
}
