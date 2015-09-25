import React from 'react';

export default class FormInput extends React.Component {
  propTypes: {
    hasError: React.PropTypes.bool,
    label: React.PropTypes.string,
    iconClass: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string
  }

  render() {
    let className = "input-symbol";
    if (this.props.hasError) {
      className += " error";
    }

    return (
      <div className={ className } >
      <span> {this.props.label}</span>
        <input
          type={ this.props.type }
          name={ this.props.name }
          placeholder={ this.props.label } />

        <span
          className={ this.props.iconClass }
          title={ this.props.label } />
      </div>
    );
  }
}
