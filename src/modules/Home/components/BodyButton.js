// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
// Shared Components
import homeStyles from 'modules/Home/styles';
import StaticButton from 'shared/components/Buttons/StaticButton';

const BodyButton = ({label}) => {
  const navigation = useNavigation();
  const navigateTo = (target) => navigation.navigate(target);
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
