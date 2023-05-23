import { ForwardedRef, ReactNode, forwardRef, useState } from 'react';

export interface ModalProps {
  children: ReactNode;
}

const Modal = forwardRef(({ children }: ModalProps, ref: ForwardedRef<HTMLDialogElement>) => {
  return (
    <dialog ref={ref}>
      <div>{children}</div>
    </dialog>
  );
});

Modal.displayName = 'Modal';

export default Modal;
