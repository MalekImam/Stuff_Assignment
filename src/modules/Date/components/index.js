// Dependencies
import React from 'react';
import moment from 'moment';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Dates from 'react-native-dates';
import {useDispatch} from 'react-redux';
// Core Files
import getMomentState from 'core/redux/helpers/getMomentState';
import {setMoment, setMoments} from 'core/redux/actions/moment';
import MomentTypeButton from 'core/components/MomentTypeButton';
// Shared Components
import NavBar from 'shared/layouts/NavBar';
import dateStyles from 'modules/Date/styles';

function Date({navigation}) {
  const dispatch = useDispatch();
  const navBarTitle = {name: 'Custom date', styles: {color: 'black'}};
  const {focus, _moment, isRange, endMoment, startMoment} = getMomentState();

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const isDateBlocked = (date) => date.isBefore(moment(), 'day');

  const onDateChange = (props) => {
    if (isRange) {
      const {startDate, endDate, focusedInput} = props;
      dispatch(setMoments(startDate, endDate, focusedInput));
    } else {
      const {date} = props;
      dispatch(setMoment(date));
    }
  };

  return (
    <View style={dateStyles.container}>
      <NavBar backBtn navBarTitle={navBarTitle} />
      <View style={dateStyles.body}>
        <View style={dateStyles.dateTypeContainer}>
          <MomentTypeButton
            type="specific"
            active={!isRange}
            label="Specific Date"
          />
          <MomentTypeButton type="range" label="Range" active={isRange} />
        </View>
        <Dates
          date={_moment}
          range={isRange}
          endDate={endMoment}
          focusedInput={focus}
          startDate={startMoment}
          onDatesChange={onDateChange}
          isDateBlocked={isDateBlocked}
        />
      </View>
    </View>
  );
}

Date.propTypes = {navigation: PropTypes.object.isRequired};

export default Date;
