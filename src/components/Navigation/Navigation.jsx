import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

export const Navigation = () => {
  const { selectIsLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {selectIsLoggedIn && (
        <NavLink to="/contacts">
          <span>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
};
