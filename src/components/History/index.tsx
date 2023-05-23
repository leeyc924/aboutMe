'use client';

import { ReactNode, memo, useCallback, useRef } from 'react';
import './index.scss';
import Modal from '@components/Modal';

export interface HistoryProps {
  id: string;
  children: ReactNode;
  isActive: boolean;
}

const History = ({ id, isActive }: HistoryProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleDetail = useCallback(() => {
    modalRef.current?.showModal();
  }, []);

  const handleClose = useCallback(() => {
    modalRef.current?.close();
  }, []);

  return (
    <>
      <div className={`history${isActive ? ' history--active' : ''}`} onClick={() => handleDetail()}>
        카드
      </div>
      <Modal ref={modalRef} closeModal={handleClose}>
        {id}
      </Modal>
    </>
  );
};

export default memo(History);
