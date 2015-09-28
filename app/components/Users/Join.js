import React, {propTypes} from 'react';
import {Link} from 'react-router';
import FormErrors from '../Forms/FormErrors';
import FormInput from '../Forms/FormInput';

export default class Join extends React.Component {

  render() {
    return (
      <div className="page auth">

        <div className="content-scrollable">
          <div className="wrapper-auth">
            <h1 className="title-auth">Join.</h1>
            <p className="subtitle-auth">
              Join to be awesome
            </p>

            <p>Login with these services:</p>
            <ul>
              <li><button type="button" onClick={this.props.handleFacebook} ><i className="fa fa-facebook"></i> Sign in with Facebook</button></li>
              <li><button type="button" onClick={this.props.handleGoogle} ><i className="fa fa-google"></i> Sign in with Google</button></li>
              <li><button type="button" onClick={this.props.handleTwitter} ><i className="fa fa-twitter"></i> Sign in with Twitter</button></li>
            </ul>

            <form onSubmit={ this.props.onSubmit }>
              <FormErrors errors={this.props.errors} />

              <FormInput
                hasError={!!this.props.errors.email}
                type="email"
                name="email"
                label="Your Email"
                iconClass="icon-email" />

              <FormInput
                hasError={!!this.props.errors.password}
                type="password"
                name="password"
                label="Password"
                iconClass="icon-lock" />

              <FormInput
                hasError={!!this.props.errors.confirm}
                type="password"
                name="confirm"
                label="Confirm Password"
                iconClass="icon-lock" />

              <button type="submit" className="btn-primary">
                Join Now
              </button>
            </form>
          </div>

          <Link to="/signin" className="link-auth-alt">
            Have an account? Sign in.
          </Link>
        </div>
      </div>
    );
  }
}
