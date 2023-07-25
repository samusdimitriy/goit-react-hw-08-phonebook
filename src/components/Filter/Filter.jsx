import React from 'react';
import {
  StyledFilterContainer,
  StyledFilterInput,
  StyledFilterHeading,
} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <StyledFilterContainer>
      <StyledFilterHeading>Filter contacts</StyledFilterHeading>
      <StyledFilterInput
        type="text"
        name="filter"
        value={value}
        onChange={handleChange}
      />
    </StyledFilterContainer>
  );
};

export default Filter;
