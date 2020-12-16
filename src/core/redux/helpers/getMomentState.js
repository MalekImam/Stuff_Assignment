import useSelect from 'core/hooks/useSelect';

const getMomentState = () => {
  const show = useSelect('momentReducer.show');
  const focus = useSelect('momentReducer.focus');
  const _moment = useSelect('momentReducer.moment');
  const isRange = useSelect('momentReducer.isRange');
  const endMoment = useSelect('momentReducer.endMoment');
  const startMoment = useSelect('momentReducer.startMoment');
  return {focus, _moment, isRange, endMoment, startMoment, show};
};

export default getMomentState;
