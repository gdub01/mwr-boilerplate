import React, {propTypes} from 'react';
import {Link} from 'react-router';
import {handleForms} from '../Forms/Form';
import InputGeneric from '../Forms/InputGeneric';
import md5 from 'blueimp-md5';
import {History} from 'react-router';
import reactMixin from 'react-mixin';

@handleForms
@reactMixin.decorate(History)
export default class JoinComponent extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleTwitter = this.handleTwitter.bind(this);
    this.handleFacebook = this.handleFacebook.bind(this);
  }

  handleSubmit(event, errors, values) {
    event.preventDefault();

    let email = values.email;
    let password = values.password;
    let confirm = values.confirm;


    if (! errors) {
      // Form errors found, do not create user
      return;
    }

    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        name: email.substring(0, email.indexOf('@')),
        avatar: "http://www.gravatar.com/avatar/" + md5(email.trim().toLowerCase()) + "?s=50&d=mm",
        images: ["http://www.gravatar.com/avatar/" + md5(email.trim().toLowerCase()) + "?s=50&d=mm"]
      }
    }, (error) => {
      if (error) {
        console.log(error)
        return;
      }
    });
    this.history.pushState(null, `/`);
  }

  handleFacebook() {
    Meteor.loginWithFacebook ({
        requestPermissions: ['email']
      }, (error) => {
        if (error) {
          this.setState({
            errors: { 'none': error.reason }
          });
        return;
      }
    });
    this.history.pushState(null, `/`);
  }

  handleGoogle() {
    Meteor.loginWithGoogle({
      requestPermissions: ['email']
    }, (error) => {
      if (error) {
        this.setState({
          errors: { 'none': error.reason }
        });
        return;
      }
    });
    this.history.pushState(null, `/`);
  }

  handleTwitter() {
    Meteor.loginWithTwitter((error) => {
      if (error) {
        this.setState({
          errors: { 'none': error.reason }
        });
        return;
      }
    });
    this.history.pushState(null, `/`);
  }

  render() {
    let values = this.props.formState.values;
    let errors = this.props.formState.errors;
    return (
      <div>

        <h3>Login with these services:</h3>
        <ul>
          <li><button type="button" onClick={this.handleFacebook} ><i className="fa fa-facebook"></i> Sign in with Facebook</button></li>
          <li><button type="button" onClick={this.handleGoogle} ><i className="fa fa-google"></i> Sign in with Google</button></li>
          <li><button type="button" onClick={this.handleTwitter} ><i className="fa fa-twitter"></i> Sign in with Twitter</button></li>
        </ul>

        <form onSubmit={() => this.handleSubmit(event, errors, values)} >
          <InputGeneric
            type="email"
            name="email"
            handleChange={this.props.handleTextChange}
            value={values.email}
            errorMsg={errors.email}
            handleBlur={this.props.handleRequiredBlur}
            label="Email Address"  />

          <InputGeneric
            type="password"
            name="password"
            handleChange={this.props.handleTextChange}
            value={values.password}
            errorMsg={errors.password}
            handleBlur={this.props.handlePasswordBlur}
            label="Password"  />

          <InputGeneric
            type="password"
            name="confirm"
            handleChange={this.props.handleTextChange}
            value={values.confirm}
            errorMsg={errors.confirm}
            handleBlur={this.props.handleRequiredBlur}
            label="Confirm Password"  />

          <button type="submit">
            Join Now
          </button>
        </form>
      </div>
    );
  }


}
