import { useSelector } from 'react-redux';
import { selectIsLoggedId } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedId);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
