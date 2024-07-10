import { ReactNode } from 'react';

type IModalProps = {
  onClose: () => void;
  children: ReactNode;
  open: boolean;
};

const Modal = ({ onClose, children, open }: IModalProps) => {
  return (
    <Modal onClose={onClose} open={open}>
      <div>{children}</div>
    </Modal>
  );
};

export default Modal;
