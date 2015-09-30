import React, { Component } from "react";

//errors by default. Errors shown on form submit. Errors hidden by default. Errors shown on blur. Errors hidden again if errorMsg is blank on change.
//componentdidmount - validate all inputs.
//inputgeneric component did mount call handleform's validate and update error messages.

//ie. validateEmail func in handleforms returns email: 'errormessage'
// genericinput needs to receive 'validate: validateemail' on props or validate: required.
// genericinput mounts, if this.props.validate.email, call this.props.validateemail
//onchange try getting current.target.refs here in forms  or pass 'handlechange(required)' as argument

export var handleForms = ComposedComponent => class extends Component {
  static displayName = "handleForms"

  constructor() {
    super();
    this.state = {
      errors: {},
      values: {}
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
    this.handleRequiredBlur = this.handleRequiredBlur.bind(this);
  }

  render() {
    return (
      <ComposedComponent
        formState={this.state}
        handleTextChange={this.handleTextChange}
        handleCheckboxChange={this.handleCheckboxChange}
        handlePasswordBlur={this.handlePasswordBlur}
        handleRequiredBlur={this.handleRequiredBlur} />
    )
  }

  handleTextChange(event) {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value; //text inputs get value from 'value'

    //can also be done with react addons or an immutability package I believe.
    //this is to merge state rather than replace it with setstate.
    let newValue = _.extend({}, this.state.values);
    newValue[name] = value;
    this.setState({ values: newValue });
  }

  handleCheckboxChange(event) {
    let name = event.currentTarget.name;
    let value = event.currentTarget.checked; //checkboxes get value from 'checked'

    let newValue = _.extend({}, this.state.values);
    newValue[name] = value;
    this.setState({ values: newValue });
  }

  handlePasswordBlur(event) {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    let error = ''

    if (value.length < 6) {
      error = ' - Password must be at least 6 digits'
    }

    let newError = _.extend({}, this.state.errors);
    newError[name] = error;
    this.setState({ errors: newError });
  }

  handleRequiredBlur(event) {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    let error = ''

    if (value.length < 1) {
      error = ' - Can\'t be blank'
    }

    let newError = _.extend({}, this.state.errors);
    newError[name] = error;
    this.setState({ errors: newError });
  }
};
