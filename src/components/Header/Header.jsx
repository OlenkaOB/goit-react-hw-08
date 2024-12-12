import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedId, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  const isLoggedId = useSelector(selectIsLoggedId);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header className={s.header}>
      {isLoggedId && <div>Welcome {user.email}</div>}
      <ul>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contakts
        </NavLink>
        {/* <NavLink className={buildLinkClass} to="/login">
          LogIn
        </NavLink> */}
        {!isLoggedId && (
          <>
            <NavLink className={buildLinkClass} to="/login">
              LogIn
            </NavLink>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
          </>
        )}
        {isLoggedId && <button onClick={() => dispatch(logout())}>Logout</button>}
      </ul>
    </header>
  );
};

export default Header;
