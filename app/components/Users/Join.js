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

              <FormInput
                errorMsg={!!this.props.errors.email ? this.props.errors.email : null}
                type="email"
                name="email"
                label="Your Email"
                value={this.props.values.email}
                handleChange={this.props.handleChange}
                handleBlur={this.props.handleBlur}
                iconClass="icon-email" />

              <FormInput
                errorMsg={!!this.props.errors.password ? this.props.errors.password : null }
                type="password"
                name="password"
                label="Password"
                value={this.props.values.password}
                handleChange={this.props.handleChange}
                handleBlur={this.props.handleBlur}
                iconClass="icon-lock" />

              <FormInput
                errorMsg={!!this.props.errors.confirm ? this.props.errors.confirm : null}
                type="password"
                name="confirm"
                label="Confirm Password"
                value={this.props.values.confirm}
                handleChange={this.props.handleChange}
                handleBlur={this.props.handleBlur}
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
