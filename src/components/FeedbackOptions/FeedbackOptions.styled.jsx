import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100px;
  border-radius: 20px;
  border: none;
  padding: 10px;
  transition: all 250ms;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
