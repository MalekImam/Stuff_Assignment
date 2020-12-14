import useSelect from 'core/hooks/useSelect';

export default function Gardian(route, navigation) {
  const {replace} = navigation;
  const user = useSelect('userReducer.user');
  if (!user) return replace('Login');
}
