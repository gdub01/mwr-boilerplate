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
    let msg
    if (this.props.errorMsg) {
      msg += " error";
    }
    if (this.props.errorMsg === 'Success!') {
      msg += " success";
    }

    return (
      <div className="pure-control-group">
        <label title={ this.props.label }>
          {this.props.label}
        </label>
        <input
          type={ this.props.type }
          name={ this.props.name }
          onChange={this.props.handleChange}
          value={this.props.value}
          onBlur={this.props.handleBlur}
          placeholder={ this.props.label }
          id={this.props.validate}
          />
        <span className={ msg }>{ this.props.errorMsg }</span>
      </div>
    );
  }
}
