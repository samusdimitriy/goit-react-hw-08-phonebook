import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const HomeView = () => (
  <Box
    minHeight="calc(100vh - 50px)"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Heading as="h1" size="2xl" fontWeight="500" textAlign="center">
      Your personal phonebook is hier.
    </Heading>
  </Box>
);

export default HomeView;
