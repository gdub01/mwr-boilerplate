import React, { Component } from "react";

export var handleForms = ComposedComponent => class extends Component {
  static displayName = "handleForms"

  constructor() {
    super();
    this.state = {
      errors: {},
      values: {}
    };
    this.handleTextChange = this.handleTextChange.bind(this);
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
    let name = event.target.name;
    let value = event.target.value; //text inputs get value from 'value'
    //can also be done with react addons or an immutability package I believe.
    //this is to merge state rather than replace it with setstate.
    let validate = event.target.id;
    if (validate) {
      let error = this[validate](value);
      let newError = _.extend({}, this.state.errors);
      newError[name] = error;
      this.setState({ errors: newError });
    }


    let newValue = _.extend({}, this.state.values);
    newValue[name] = value;
    this.setState({ values: newValue });
  }

  password(value) {
    if (value.length < 6) {
      return ('Password must be at least 6 digits');
    }
    if (value.search(/[a-z]/i) < 0) {
      return ('Your password must contain at least one letter');
    }
    if (value.search(/[0-9]/) < 0) {
      return ('Your password must contain at least 1 number');
    }
    return ('Success!');
  }

  required(value) {
    if (value.length < 1) {
      return ('Can\'t be blank');
    }
    return ('Success!');
  }

  email(value) {
    if (value.search(/[^\s@]+@[^\s@]+\.[^\s@]+/) < 0) {
      return ('Doesn\'t look like a valid email');
    }
    return ('Success!');
  }
};
