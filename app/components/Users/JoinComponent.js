import React, {propTypes} from 'react';
import {Link} from 'react-router';
import {handleForms} from '../Forms/Form';
import InputGeneric from '../Forms/InputGeneric';
import md5 from 'blueimp-md5';
import {History} from 'react-router';
import reactMixin from 'react-mixin';
import JoinCss from './Join.css';

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

        <form className="pure-form pure-form-aligned" onSubmit={() => this.handleSubmit(event, errors, values)} >
          <fieldset>
            <InputGeneric
              type="email"
              name="email"
              handleChange={this.props.handleChange}
              value={values.email}
              errorMsg={errors.email}
              validateBy="email"
              label="Email Address"
              required="true"  />

            <InputGeneric
              type="password"
              name="password"
              handleChange={this.props.handleChange}
              value={values.password}
              errorMsg={errors.password}
              validateBy="password"
              label="Password"
              required="true"  />

            <InputGeneric
              type="password"
              name="confirm"
              handleChange={this.props.handleChange}
              value={values.confirm}
              errorMsg={errors.confirm}
              validateBy="confirmPassword"
              label="Confirm Password"
              required="true"  />

            <button className="pure-button pure-button-primary" type="submit">
              Join Now
            </button>
          </fieldset>
        </form>
      </div>
    );
  }

  handleSubmit(event, errors, values) {
    event.preventDefault();

    const {email, password, confim} = values;

    //don't submit form if an error message is displaying
    if (errors.email || errors.password || errors.confirm) {
      console.log(errors.email + errors.password + errors.confirm)
      return
    }

    //todo - handle form submission b

    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        name: email.substring(0, email.indexOf('@')),
        avatar: "http://www.gravatar.com/avatar/" + md5(email.trim().toLowerCase()) + "?s=50&d=mm", //actual image picked by user to display
        images: ["http://www.gravatar.com/avatar/" + md5(email.trim().toLowerCase()) + "?s=50&d=mm"] //collection of images in users account
      }
    }, (error) => {
      if (error) {
        console.log(error.reason)
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
            errors: { 'facebook': error.reason }
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
          errors: { 'google': error.reason }
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
          errors: { 'twitter': error.reason }
        });
        return;
      }
    });
    this.history.pushState(null, `/`);
  }
}
