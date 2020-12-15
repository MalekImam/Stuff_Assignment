// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
// Core Files
import {setIsMomentInRange} from 'core/redux/actions/moment';
// Shared Components
import StaticButton from 'shared/components/Buttons/StaticButton';
// Paper Ui
import {Colors} from 'react-native-paper';

function MomentTypeButton({label, type, active}) {
  const dispatchMoment = useDispatch();
  const activeButtonStyle = {
    borderWidth: 1,
    borderBottomColor: Colors.lightBlue300,
  };

  const onMomentTypeChange = (type) => {
    if (type === 'range') dispatchMoment(setIsMomentInRange(true));
    else dispatchMoment(setIsMomentInRange(false));
  };

  return (
    <StaticButton
      mode="text"
      label={label}
      uppercase={false}
      onPress={() => onMomentTypeChange(type)}
      buttonStyle={active ? activeButtonStyle : null}
    />
  );
}

MomentTypeButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MomentTypeButton;
