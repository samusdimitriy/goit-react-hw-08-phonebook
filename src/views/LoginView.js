import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Container,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Notiflix from 'notiflix';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(authOperations.logIn({ email, password }));
      setEmail('');
      setPassword('');
    } catch (error) {
      Notiflix.Notify.failure(' Failed to log in: ' + error);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to bottom, #f6f6f6, #ffffff)"
    >
      <Container p={8} maxW="400px" bg="white" boxShadow="md" borderRadius="lg">
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          Log in{' '}
        </Heading>

        <Box as="form" onSubmit={handleSubmit}>
          <FormControl mb={3}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              borderColor="gray.400"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              borderColor="gray.400"
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginView;
