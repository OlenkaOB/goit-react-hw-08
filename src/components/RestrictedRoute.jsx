import { useSelector } from 'react-redux';
import { selectIsLoggedId } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedId);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
