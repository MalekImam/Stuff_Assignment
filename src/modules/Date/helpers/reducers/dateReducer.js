import {
  SET_DATE,
  SET_DATES,
  SET_IS_DATE_RANGE,
} from 'modules/Date/helpers/actions/types';

export const initialDateState = {
  date: null,
  endDate: null,
  isRange: false,
  startDate: null,
  focus: 'startDate',
};

const dateReducer = (state = initialDateState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {...state, date: action.data};
    case SET_DATES:
      return {...state, ...action.data};
    case SET_IS_DATE_RANGE:
      return {...state, isRange: action.data};
    default:
      return state;
  }
};

export default dateReducer;
