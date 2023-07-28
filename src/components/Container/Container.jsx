import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar';
import { Loader } from 'components/Loader/Loader';

export const Container = () => {
  return (
    <Box>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
