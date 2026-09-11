import { createPortal } from "react-dom";
import "./Modal.module.css";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div
        className={styles["modal-content"]}
        onClick={(event) => event.stopPropagation()}
      >
        <button className={styles["modal-close"]} onClick={onClose}></button>
        {children}
      </div>
    </div>,
    document.getElementById("root")!,
  );
};

export default Modal;
