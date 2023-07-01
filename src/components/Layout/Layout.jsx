import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import css from 'components/Layout/Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.wrap}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
