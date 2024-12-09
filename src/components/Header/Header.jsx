import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="tasks">Tasks</NavLink>
      <NavLink to="login">LogIn</NavLink>
      <NavLink to="register">Register</NavLink>
    </header>
  );
};

export default Header;
