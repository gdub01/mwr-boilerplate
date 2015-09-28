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
        <img src={user.profile.avatar} />
        <ul>
          <li>Joined: {moment({createdAt}).format('MMMM DD, YYYY')}</li>
          <li>Name: {user.profile.name}</li>
          <li>Email: {user.emails && user.emails[0].address ? user.emails[0].address : 'No email'}</li>
        </ul>
      </div>
    );
  }
}
