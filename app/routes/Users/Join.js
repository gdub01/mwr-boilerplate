import React from 'react';
import Join from '../../components/Users/Join';
import {History} from 'react-router';
import reactMixin from 'react-mixin';
import md5 from 'blueimp-md5';

@reactMixin.decorate(History)
export default class JoinRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      values: {
        email: "",
        password: "",
        confirm: ""
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleTwitter = this.handleTwitter.bind(this);
    this.handleFacebook = this.handleFacebook.bind(this);
    this.logout = this.logout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;

    //can also be done with react addons or an immutability package I believe.
    //this is to merge state rather than replace it with setstate.
    let newValue = _.extend({}, this.state.values);
    newValue[name] = value;
    this.setState({ values: newValue });
    //setState(function(previousState, currentProps) {
    //  return {myInteger: previousState.myInteger + 1};
    //});

  }

  handleBlur(event) {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    let error = ''

    if (value.length < 1) {
      error = 'Cant be blank'
    }
    if (name === "password" && value.length < 6) {
      error = 'Password must be at least 6 digits'
    }
    let newError = _.extend({}, this.state.errors);
    newError[name] = error;
    this.setState({ errors: newError });
  }

  onSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm = event.target.confirm.value;

    const errors = {};

    if (! email) {
      errors.email = 'Email required';
    }

    if (! password) {
      errors.password = 'Password required';
    }

    if (password.length < 6) {
      errors.password = 'Password must be at least 6 digits';
    }

    if (confirm !== password) {
      errors.confirm = 'Please confirm your password';
    }

    this.setState({
      errors: errors
    });

    if (! _.isEmpty(errors)) {
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
        this.setState({
          errors: { 'none': error.reason }
        });
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

  logout() {
    Meteor.logout();
    this.history.pushState(null, `/`);
  }

  render() {
    if (Meteor.user()) {
      return (
        <div>
          <p>You're currently signed in.</p>
          <button onClick={ this.logout } >Logout</button>
        </div>
      )
    }
    return (
      <Join handleTwitter={this.handleTwitter}
        handleGoogle={this.handleGoogle}
        handleFacebook={this.handleFacebook}
        onSubmit={this.onSubmit}
        errors={this.state.errors}
        values={this.state.values}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur} />
    )
  }
}
