// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// Core Files
import {clearMoment} from 'core/redux/actions/moment';
// Shared Components
import homeStyles from 'modules/Home/styles';
import StaticButton from 'shared/components/Buttons/StaticButton';

const BodyButton = ({label}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const navigateTo = (target) => {
    dispatch(clearMoment());
    navigation.navigate(target);
  };
  return (
    <StaticButton
      label={label}
      onPress={() => navigateTo(label)}
      buttonStyle={homeStyles.btnsStyle}
      _btnContentStyle={homeStyles.btnsContentStyle}
    />
  );
};

BodyButton.propTypes = {label: PropTypes.string.isRequired};

export default BodyButton;
