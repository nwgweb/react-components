import React from "react";
import styles from "./Modal.module.scss";
import { Portal } from "react-portal";
import Button from "../Button/Button";

interface ModalProps {
  title: string;
  onCloseModal?: any;
  onSubmit?: any;
}

const Modal: React.FC<ModalProps> = ({
  title,
  onCloseModal,
  onSubmit,
  children
}) => {
  return (
    <Portal>
      <div
        className={styles["modal-overlay"]}
        onClick={() => onCloseModal()}
      ></div>
      <div className={styles["modal"]}>
        <div className={styles["modal-header"]}>
          <h5 className={styles["modal-title"]}>{title}</h5>
          <i
            className={styles["modal-close-button"] + " fas fa-times"}
            onClick={() => onCloseModal()}
          ></i>
        </div>
        <div className={styles["modal-body"]}>{children}</div>
        <div className={styles["modal-footer"]}>
          <Button
            size={35}
            mode="default"
            color="transparent"
            className={styles["modal-button"]}
            onClick={() => onCloseModal()}
          >
            Cancel
          </Button>
          <Button
            size={35}
            mode="default"
            color="primary"
            className={styles["modal-button"]}
            onClick={() => onSubmit()}
          >
            Continue
          </Button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
