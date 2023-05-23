import Screenout from '@components/Screenout';
import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { MdClose as IconClose } from 'react-icons/md';
import './index.scss';

export interface ModalProps {
  children: ReactNode;
  closeModal(): void;
}

const Modal = forwardRef(({ children, closeModal }: ModalProps, ref: ForwardedRef<HTMLDialogElement>) => {
  return (
    <dialog ref={ref} className="modal">
      <div className="modal__container">
        <button className="modal__close" onClick={closeModal}>
          <IconClose />
          <Screenout>닫기</Screenout>
        </button>
        {children}
      </div>
    </dialog>
  );
});

Modal.displayName = 'Modal';

export default Modal;
