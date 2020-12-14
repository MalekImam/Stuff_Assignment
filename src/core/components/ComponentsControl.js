// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
// Shared Components
import Input from 'shared/components/Input';

function ComponentControl({control, ...rest}) {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'password':
      return <Input secureTextEntry {...rest} />;
    case 'email':
      return <Input keyboardType="email-address" {...rest} />;
    default:
      return null;
  }
}

ComponentControl.propTypes = {
  control: PropTypes.string.isRequired,
};

export default ComponentControl;
