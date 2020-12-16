import {
  SET_MOMENT,
  SET_MOMENTS,
  CLEAR_MOMENT,
  SET_IS_MOMENT_IN_RANGE,
} from 'core/redux/actions/types';

export const clearMoment = () => ({type: CLEAR_MOMENT});
export const setMoment = (moment) => ({type: SET_MOMENT, data: moment});

export const setMoments = (startMoment, endMoment, focus) => ({
  type: SET_MOMENTS,
  data: {startMoment, endMoment, focus},
});

export const updateMoment = (data) => ({type: SET_MOMENTS, data});

export const setIsMomentInRange = (isRange) => ({
  data: isRange,
  type: SET_IS_MOMENT_IN_RANGE,
});
