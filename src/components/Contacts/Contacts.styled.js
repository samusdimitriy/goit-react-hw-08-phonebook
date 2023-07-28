import styled from '@emotion/styled';

export const StyledContactsContainer = styled.div`
  margin-top: 20px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
`;

export const StyledContactsHeading = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledContactsList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const StyledContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const StyledContactName = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const StyledContactNumber = styled.span`
  margin-right: 5px;
`;

export const StyledDeleteButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
