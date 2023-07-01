import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import { RegisterPage } from 'pages/Register';
import { LoginPage } from 'pages/Login';
import { ContactPage } from 'pages/Contact';
import HomePage from 'pages/Home';
import { useDispatch } from 'react-redux';
// import { useAuth } from 'redux/auth/useAuth';
import { refreshUser } from 'redux/auth/operations';

// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';
// import { lazy } from 'react';

// const HomePage = lazy(() => import('pages/Home'));
// const RegisterPage = lazy(() => import('pages/Register'));
// const LoginPage = lazy(() => import('pages/Login'));
// const ContactPage = lazy(() => import('pages/Contact'));

export const App = () => {
  // const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<HomePage />} />
  //       <Route
  //         path="/register"
  //         element={
  //           <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
  //         }
  //       />
  //       <Route
  //         path="/login"
  //         element={
  //           <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
  //         }
  //       />
  //       <Route
  //         path="/contacts"
  //         element={
  //           <PrivateRoute redirectTo="/login" component={<ContactPage />} />
  //         }
  //       />
  //     </Route>
  //   </Routes>
  // );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};
// {
/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes> */
// }
