import useSelect from 'core/hooks/useSelect';

export default function Gardian(route, navigation) {
  const {replace} = navigation;
  const {user} = useSelect();
  if (!user) return replace('Login');
}
