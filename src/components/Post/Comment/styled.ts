import styled from 'styled-components';
import { Colors } from '../../../constants/colors';

export const Comment = styled.div`
  border: 1px solid ${Colors.BLACK};
  width: 400px;
  height: 100px;
  margin: 10px auto;
  padding: 10px;

  input {
    width: 98%;
  }
`;
