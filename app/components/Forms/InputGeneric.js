import React from 'react';

export default class InputGeneric extends React.Component {
  propTypes: {
    errorMsg: React.PropTypes.string,
    label: React.PropTypes.string,
    iconClass: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    handleBlur: React.PropTypes.func,
    handleChange: React.PropTypes.func,
  }

  static defaultProps = {
    type: 'text'
  };

  constructor() {
    super();
  }

  render() {
    let msg = "pure-form-message"
    if (this.props.errorMsg) {
      msg += " error";
    }
    if (this.props.errorMsg === 'Success!') {
      msg += " success";
    }

    return (
      <div className="pure-control-group">
        <label htmlFor={ this.props.name } title={ this.props.label }>
          {this.props.label}
        </label>
        <input
          type={ this.props.type }
          name={ this.props.name }
          onChange={this.props.handleChange}
          value={this.props.value}
          placeholder={ this.props.label }
          data-validateby={this.props.validateBy}
          required={this.props.required}
          />
        <span className={ msg }>{ this.props.errorMsg }</span>
      </div>
    );
  }
}
