import React, { Component } from 'react';

class FormErrors extends Component {
  render() {
    const { formErrors } = this.props;
    return (
      <div>
        {Object.keys(formErrors).filter((fieldName) => (
          formErrors[fieldName].length > 0
        )).map((fieldName) => (
          <p key={formErrors.i}>{fieldName} {formErrors[fieldName]}</p>
        ))};
      </div>
    );
  }
}

export default FormErrors;