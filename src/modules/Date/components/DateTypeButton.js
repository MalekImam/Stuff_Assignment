// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
// Core Files
import {setIsDateRange} from 'modules/Date/helpers/actions/date';
// Shared Components
import StaticButton from 'shared/components/Buttons/StaticButton';
// Paper Ui
import {Colors} from 'react-native-paper';

function DateTypeButton({label, type, active, dispatchDate}) {
  const activeButtonStyle = {
    borderWidth: 1,
    borderBottomColor: Colors.lightBlue300,
  };

  const onDateTypeChange = (type) => {
    if (type === 'range') dispatchDate(setIsDateRange(true));
    else dispatchDate(setIsDateRange(false));
  };

  return (
    <StaticButton
      mode="text"
      label={label}
      uppercase={false}
      onPress={() => onDateTypeChange(type)}
      buttonStyle={active ? activeButtonStyle : null}
    />
  );
}

DateTypeButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dispatchDate: PropTypes.func.isRequired,
};

export default DateTypeButton;
