import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar';
import { Loader } from 'components/Loader/Loader';

export const Container = () => {
  return (
    <>
      {' '}
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
