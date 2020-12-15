import {
  SET_DATE,
  SET_DATES,
  SET_IS_DATE_RANGE,
} from 'modules/Date/helpers/actions/types';

export const setDate = (date) => ({type: SET_DATE, data: date});

export const setDates = (startDate, endDate, focus) => ({
  type: SET_DATES,
  data: {startDate, endDate, focus},
});

export const setIsDateRange = (isRange) => ({
  data: isRange,
  type: SET_IS_DATE_RANGE,
});
