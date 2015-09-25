import React from 'react';
import {Link} from 'react-router';
import FormErrors from '../Forms/FormErrors';
import FormInput from '../Forms/FormInput';

export default class SignIn extends React.Component {

  constructor() {
    super();
    this.state = {errors: {}};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const errors = {};

    if (! email) {
      errors.email = 'Email required';
    }

    if (! password) {
      errors.password = 'Password required';
    }

    this.setState({
      errors: errors
    });

    if (! _.isEmpty(errors)) {
      // Form errors found, do not log in
      return;
    }

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        this.setState({
          errors: { 'none': error.reason }
        });

        return;
      }

      // this.history.pushState(null, `/`); Doesn't work with es6 yet.
    });
  }

  render() {
    return (
      <div className="page auth">
        <div className="content-scrollable">
          <div className="wrapper-auth">
            <h1 className="title-auth">Sign In.</h1>
            <p className="subtitle-auth" >
              Sign in
            </p>

            <form onSubmit={ this.onSubmit }>
              <FormErrors errors={this.state.errors} />

              <FormInput
                hasError={!! this.state.errors.email}
                type="email"
                name="email"
                label="Your Email"
                iconClass="icon-email" />

              <FormInput hasError={!! this.state.errors.password}
                type="password"
                name="password"
                label="Password"
                iconClass="icon-lock" />

              <button type="submit" className="btn-primary">
                Sign in
              </button>
            </form>
          </div>
          <Link to="/join" className="link-auth-alt">
            Need an account? Join Now.
          </Link>
        </div>
      </div>
    )
  }
}
