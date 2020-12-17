// Dependencies
import React from 'react';
import moment from 'moment';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Dates from 'react-native-dates';
import {useDispatch} from 'react-redux';
// Core Files
import getMomentState from 'core/redux/helpers/getMomentState';
import {
  setMoment,
  setMoments,
  setIsMomentInRange,
} from 'core/redux/actions/moment';
import MomentTypeButton from 'core/components/MomentTypeButton';
// Shared Components
import NavBar from 'shared/layouts/NavBar';
import dateStyles from 'modules/Date/styles';
import StaticButton from 'shared/components/Buttons/StaticButton';
import getFormattedDate from 'modules/Date/helpers/getFormattedDate';

function Date({navigation}) {
  const dispatch = useDispatch();
  const navBarTitle = {name: 'Custom date', styles: {color: 'black'}};
  const {focus, _moment, isRange, endMoment, startMoment} = getMomentState();

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  // Default option is Specific Time
  React.useEffect(() => {
    dispatch(setIsMomentInRange(false));
  }, []);

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

  const [selectedDate, setSelectedDate] = React.useState('');

  React.useEffect(() => {
    let res = JSON.stringify(getFormattedDate(_moment));
    if (isRange)
      res = `${JSON.stringify(getFormattedDate(startMoment))} - ${
        endMoment !== null ? JSON.stringify(getFormattedDate(endMoment)) : ''
      }`;
    setSelectedDate(res);
  }, [_moment, startMoment, endMoment]);

  const addMeeting = () => {
    dispatch(insertMeeting(selectedDate));
  };

  console.log(selectedDate);
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
        {selectedDate !== 'null' ? (
          <View style={{marginTop: 190}}>
            <StaticButton label={selectedDate} onPress={() => addMeeting()} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

Date.propTypes = {navigation: PropTypes.object.isRequired};

export default Date;
