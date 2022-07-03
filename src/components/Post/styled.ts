import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const PostWrapper = styled.div`
  border: 1px solid ${Colors.BLACK};
  width: 400px;
  height: 400px;
  margin: 30px auto;
  border-radius: 20px;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 10px;
`;
