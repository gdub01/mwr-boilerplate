import React from 'react';

export default class FormInput extends React.Component {
  propTypes: {
    errorMsg: React.PropTypes.string,
    label: React.PropTypes.string,
    iconClass: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string
  }

  static defaultProps = {
    //title: 'Undefined Product'
  };

  render() {
    let className = "input-symbol";
    if (this.props.errorMsg) {
      className += " error";
    }

    return (
      <div className={ className } >
      <span> {this.props.label}</span>
        <input
          type={ this.props.type }
          name={ this.props.name }
          onChange={this.props.handleChange}
          value={this.props.value}
          onBlur={this.props.handleBlur}
          placeholder={ this.props.label } />
        <span className={ this.props.iconClass } >{ this.props.errorMsg }</span>
        <span
          className={ this.props.iconClass }
          title={ this.props.label } />
      </div>
    );
  }
}
