import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar';
import { Wrapper } from './Container.styled';
import { Loader } from 'components/Loader/Loader';

export const Container = () => {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
