import { Box, Text, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const value = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box p={4} bg="gray.200" borderRadius="md" mb={10}>
      <Text as="h2" fontSize="lg" fontWeight="bold" mb={2}>
        Filter contacts
      </Text>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={handleChange}
        bg="white"
        borderColor="gray.400"
        _focus={{ borderColor: 'teal.400' }}
      />
    </Box>
  );
};

export default Filter;
