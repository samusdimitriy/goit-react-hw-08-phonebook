import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button } from '@chakra-ui/react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}!</span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
