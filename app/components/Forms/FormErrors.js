import React from 'react';

export default class FormErrors extends React.Component {
  propTypes: {
    errors: React.PropTypes.object
  }
  render() {
    if (this.props.errors) {
      return (
        <div className="list-errors">
          {
            _.values(this.props.errors).map((errorMessage, i) => {
              return <div key={i} className="list-item">
                {errorMessage}
              </div>;
            })
          }
        </div>
      );
    } else {
      // Don't render anything
      return <span />
    }
  }
}
