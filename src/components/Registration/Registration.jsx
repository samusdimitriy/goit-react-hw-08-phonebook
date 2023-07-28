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
import { authOperations } from 'redux/auth';

const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
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
          Registration
        </Heading>

        <Box as="form" onSubmit={handleSubmit}>
          <FormControl mb={3}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={handleChange}
              required
              borderColor="gray.400"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
              required
              borderColor="gray.400"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={handleChange}
              required
              borderColor="gray.400"
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Register
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Registration;
