import useSelect from 'core/hooks/useSelect';

export default function ReverseGardian(route, navigation) {
  const {navigate} = navigation;
  const user = useSelect('userReducer.user');
  if (!user) return navigate('Home');
}
