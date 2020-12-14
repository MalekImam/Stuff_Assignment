import useSelect from 'core/hooks/useSelect';

export default function ReveseGardian(route, navigation) {
  const {navigate} = navigation;
  const {user} = useSelect();
  if (!user) return navigate('Home');
}
