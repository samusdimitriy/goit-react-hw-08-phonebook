import styled from 'styled-components';

export const StyledFilterContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 40px;

  margin: 0 auto;
`;

export const StyledFilterHeading = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const StyledFilterInput = styled.input`
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  min-width: 300px;

  max-width: 100%;
`;
