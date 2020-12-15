// Dependencies
import moment from 'moment';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Dates from 'react-native-dates';
import React, {useReducer} from 'react';
// Core Files
import dateReducer, {
  initialDateState,
} from 'modules/Date/helpers/reducers/dateReducer';
import {setDate, setDates} from 'modules/Date/helpers/actions/date';
// Shared Components
import NavBar from 'shared/layouts/NavBar';
import dateStyles from 'modules/Date/styles';
import DateTypeButton from 'modules/Date/components/DateTypeButton';

function Date({navigation}) {
  const navBarTitle = {name: 'Custom date', styles: {color: 'black'}};
  const [dateState, dispatch] = useReducer(dateReducer, initialDateState);

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const isDateBlocked = (date) => date.isBefore(moment(), 'day');

  const onDateChange = (props) => {
    if (dateState.isRange) {
      const {startDate, endDate, focusedInput} = props;
      dispatch(setDates(startDate, endDate, focusedInput));
    } else {
      const {date} = props;
      dispatch(setDate(date));
    }
  };

  return (
    <View style={dateStyles.container}>
      <NavBar backBtn navBarTitle={navBarTitle} />
      <View style={dateStyles.body}>
        <View style={dateStyles.dateTypeContainer}>
          <DateTypeButton
            type="specific"
            label="Specific Date"
            dispatchDate={dispatch}
            active={!dateState.isRange}
          />
          <DateTypeButton
            type="range"
            label="Range"
            dispatchDate={dispatch}
            active={dateState.isRange}
          />
        </View>
        <Dates
          date={dateState.date}
          startDate={dateState.startDate}
          endDate={dateState.endDate}
          focusedInput={dateState.focus}
          range={dateState.isRange}
          onDatesChange={onDateChange}
          isDateBlocked={isDateBlocked}
        />
      </View>
    </View>
  );
}

Date.propTypes = {navigation: PropTypes.object.isRequired};

export default Date;
