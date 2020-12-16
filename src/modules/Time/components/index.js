// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
// Core Files
import getParsedTime from 'modules/Time/helpers/parseTime';
import getMomentState from 'core/redux/helpers/getMomentState';
import MomentTypeButton from 'core/components/MomentTypeButton';
import {updateMoment, setIsMomentInRange} from 'core/redux/actions/moment';
// Shared Components
import NavBar from 'shared/layouts/NavBar';
import timeStyles from 'modules/Time/styles';
import SelectedTime from 'modules/Time/components/SelectedTime';

function Time({navigation}) {
  const dispatchMoment = useDispatch();
  const navBarTitle = {name: 'Custom time', styles: {color: 'black'}};
  const {
    show,
    _moment,
    isRange,
    endMoment,
    idSelected,
    startMoment,
  } = getMomentState();
  const startTimeActive = idSelected === 'start' || !isRange ? true : false;

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  // Default option is Specific Time
  React.useEffect(() => {
    dispatchMoment(setIsMomentInRange(false));
  }, []);

  const onChange = (event, selectedDate) => {
    const parsedTime = getParsedTime(selectedDate);
    const currentMoment = parsedTime || _moment;

    const mandatoryUpdates = {
      moment: selectedDate,
      show: Platform.OS === 'ios',
    };
    if (startTimeActive) mandatoryUpdates.startMoment = currentMoment;
    else mandatoryUpdates.endMoment = currentMoment;
    dispatchMoment(updateMoment(mandatoryUpdates));
  };

  return (
    <View style={timeStyles.container}>
      <NavBar backBtn navBarTitle={navBarTitle} />
      <View style={timeStyles.body}>
        <View style={timeStyles.timeTypeContainer}>
          <MomentTypeButton
            type="specific"
            active={!isRange}
            label="Specific time"
          />
          <MomentTypeButton type="range" label="Range" active={isRange} />
        </View>
        <View style={timeStyles.timeTypeContainer}>
          <SelectedTime
            id="start"
            label={startMoment}
            active={startTimeActive}
          />
          {isRange ? (
            <>
              <Text style={timeStyles.dividerTime}> - </Text>
              <SelectedTime
                id="end"
                label={endMoment}
                active={!startTimeActive}
              />
            </>
          ) : null}
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
