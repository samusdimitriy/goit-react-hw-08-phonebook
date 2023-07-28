import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

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
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
