// Dependencies
import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
// Core Files
import {updateMoment, setIsMomentInRange} from 'core/redux/actions/moment';
import getMomentState from 'core/redux/helpers/getMomentState';
import MomentTypeButton from 'core/components/MomentTypeButton';
// Shared Components
import NavBar from 'shared/layouts/NavBar';
import timeStyles from 'modules/Time/styles';

function Time({navigation}) {
  const navBarTitle = {name: 'Custom time', styles: {color: 'black'}};
  const dispatchMoment = useDispatch();
  const {show, _moment, isRange, endMoment, startMoment} = getMomentState();

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  // Default option is Specific Time
  React.useEffect(() => {
    dispatchMoment(setIsMomentInRange(false));
  }, []);

  const onChange = (event, selectedDate) => {
    const currentMoment = selectedDate || _moment;
    dispatchMoment(
      updateMoment({show: Platform.OS === 'ios', moment: currentMoment}),
    );
  };

  return (
    <View style={timeStyles.container}>
      <NavBar backBtn navBarTitle={navBarTitle} />
      <View style={timeStyles.body}>
        <View style={timeStyles.timeTypeContainer}>
          <MomentTypeButton
            type="specific"
            active={!isRange}
            label="Specific Date"
          />
          <MomentTypeButton type="range" label="Range" active={isRange} />
        </View>
        {show && (
          <DateTimePicker
            mode="time"
            is24Hour={false}
            display="spinner"
            onChange={onChange}
            testID="dateTimePicker"
            value={_moment || new Date()}
          />
        )}
      </View>
    </View>
  );
}

Time.propTypes = {navigation: PropTypes.object.isRequired};

export default Time;
