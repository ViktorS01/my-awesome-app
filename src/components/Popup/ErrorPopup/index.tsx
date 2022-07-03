import React, { FC, useEffect } from 'react';
import * as ST from './styled';
import { createPortal } from 'react-dom';

type LeaveProps = {
  show: boolean;
  text: string;
};

export const ErrorPopup: FC<LeaveProps> = ({ show, text }) => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  const modalContent = show && (
    <ST.ModalOverlay>
      <ST.Modal onClick={(e) => e.stopPropagation()}>
        <ST.Text>Предупреждение.</ST.Text>
        <ST.TextP>{text}</ST.TextP>
      </ST.Modal>
    </ST.ModalOverlay>
  );

  useEffect(() => {
    document.body.appendChild(modalRoot);
    return () => {
      document.body.removeChild(modalRoot);
    };
  }, [modalContent]);

  return createPortal(modalContent, modalRoot);
};
