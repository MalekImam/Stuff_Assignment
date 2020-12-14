// Dependencies
import {Obj} from 'reinforcements';
import {useSelector} from 'react-redux';

export default function useSelect(key) {
  return useSelector((state) => Obj.get(state, key));
}
