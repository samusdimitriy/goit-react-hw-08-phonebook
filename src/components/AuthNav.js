import React from 'react';
import { NavLink } from 'react-router-dom';

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
    <div>
      <NavLink
        to="/register"
        exact="true"
        style={styles.link}
        activeclassname="activeLink"
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact="true"
        style={styles.link}
        activeclassname="activeLink"
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
