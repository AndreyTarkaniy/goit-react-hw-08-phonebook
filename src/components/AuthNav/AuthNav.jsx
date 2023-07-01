import { NavLink } from 'react-router-dom';
import css from 'components/AuthNav/AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <ul className={css.authNavList}>
        <li>
          <NavLink className={css.authNavLink} to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={css.authNavLink} to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
