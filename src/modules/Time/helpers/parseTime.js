// Dependencies
import moment from 'moment';

const getParsedTime = (time) => {
  const parsedTime = moment(time).format('hh:mm A');
  return parsedTime;
};

export default getParsedTime;
