import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    </div>
  );
};
