import styled from 'styled-components';
import { Colors } from '../../../constants/colors';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.div``;

export const Text = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: ${Colors.BLACK};
  width: 420px;
  padding-top: 56px;
  padding-bottom: 16px;
`;
export const TextP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  width: 420px;
  padding-bottom: 32px;
  color: ${Colors.BLACK};
`;
