import React, {propTypes} from 'react';
import {handleForms} from '../../components/Forms/Form';
import InputGeneric from '../../components/Forms/InputGeneric';
import md5 from 'blueimp-md5';
import {History, Link} from 'react-router';
import reactMixin from 'react-mixin';

import forms from '../../globalstyles/forms.css';
import buttons from '../../globalstyles/buttons.css'
import grids from '../../globalstyles/grids.css'
import join from './join.css'

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
        <div className="pure-g">
          <div className="pure-u-1-3">
          <h2>Get Started!</h2>
            <div className="login-buttons">
              <button className="pure-button pure-button-primary" type="button" onClick={this.handleFacebook} >Join with Facebook <i className="fa fa-facebook fa-lg"></i></button><br />
              <button className="pure-button pure-button-primary pure-button-primary" type="button" onClick={this.handleGoogle} >Join with Google <i className="fa fa-google fa-lg"></i></button><br />
              <button className="pure-button pure-button-primary" type="button" onClick={this.handleTwitter} >Join with Twitter <i className="fa fa-twitter fa-lg"></i></button>
            </div>

            <form className="pure-form pure-form-stacked" onSubmit={() => this.handleSubmit(event, errors, values)} >
              <fieldset>

              <h6>- Or Join with Email -</h6>
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

                <div className="pure-controls">
                  <button className="pure-button pure-button-primary" type="submit">
                    Join with Email
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
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
