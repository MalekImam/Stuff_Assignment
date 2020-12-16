// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
// Core Files
import {updateMoment} from 'core/redux/actions/moment';
// Shared Components
import StaticButton from 'shared/components/Buttons/StaticButton';
// Paper Ui
import {Colors} from 'react-native-paper';
import getParsedTime from '../helpers/parseTime';

function SelectedTime({id, active, label}) {
  const dispatchMoment = useDispatch();
  const notActiveColor = Colors.grey400;
  const activeColor = Colors.lightBlue300;
  const _label = label ? label : getParsedTime(new Date());

  const onTimeSelected = (id) => {
    dispatchMoment(updateMoment({show: true, rangeIdSelected: id}));
  };

  return (
    <StaticButton
      mode="text"
      label={_label}
      uppercase={false}
      onPress={() => onTimeSelected(id)}
      color={active ? activeColor : notActiveColor}
    />
  );
}

SelectedTime.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default SelectedTime;
