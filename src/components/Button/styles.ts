import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #ff9000;
  color: #312e38;
  border-radius: 10px;
  margin-top: 16px;
  font-weight: 500;
  border: 0;
  transition: background-color 400ms;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
