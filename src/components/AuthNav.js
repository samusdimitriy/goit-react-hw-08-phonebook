import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => {
  return (
    <Box as="div">
      <NavLink
        to="/register"
        exact="true"
        style={styles.link}
        activeclassname={styles.activeLink} // Исправляем здесь
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact="true"
        style={styles.link}
        activeclassname={styles.activeLink} // Исправляем здесь
      >
        Login
      </NavLink>
    </Box>
  );
};

export default AuthNav;
