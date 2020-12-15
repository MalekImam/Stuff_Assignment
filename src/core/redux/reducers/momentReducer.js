import {
  SET_MOMENT,
  SET_MOMENTS,
  CLEAR_MOMENT,
  SET_IS_MOMENT_IN_RANGE,
} from 'core/redux/actions/types';

const initialMomentState = {
  moment: null,
  isRange: false,
  endMoment: null,
  startMoment: null,
  focus: 'startDate',
};

const momentReducer = (state = initialMomentState, action) => {
  switch (action.type) {
    case SET_MOMENT:
      return {...state, moment: action.data};
    case CLEAR_MOMENT:
      return initialMomentState;
    case SET_MOMENTS:
      return {...state, ...action.data};
    case SET_IS_MOMENT_IN_RANGE:
      return {...state, isRange: action.data};
    default:
      return state;
  }
};

export default momentReducer;
