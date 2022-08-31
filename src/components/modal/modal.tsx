import { ReactComponentElement } from 'react';
import styles from '../modal/modal.module.scss';

interface IModal {
  children?: React.ReactNode;
  active: boolean;
  setActive: (value: boolean) => void | undefined;
}

function Modal({ active, setActive, children }: IModal) {
  return (
    <>
      <div
        className={active ? styles.modalActive : styles.modal}
        onClick={(e) => e.stopPropagation}
      >
        <div className={active ? styles.modalContentActive : styles.modalContent}>{children}</div>
      </div>
    </>
  );
}

export default Modal;
