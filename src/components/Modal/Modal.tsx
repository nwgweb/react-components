import React from "react";
import CSSModule from "react-css-modules";
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
      <div styleName="modal-overlay" onClick={() => onCloseModal()}></div>
      <div styleName="modal">
        <div styleName="modal-header">
          <h5 styleName="modal-title">{title}</h5>
          <i
            styleName="modal-close-button"
            className="fas fa-times"
            onClick={() => onCloseModal()}
          ></i>
        </div>
        <div styleName="modal-body">{children}</div>
        <div styleName="modal-footer">
          <Button
            size={35}
            mode="default"
            color="transparent"
            styleName="modal-button"
            onClick={() => onCloseModal()}
          >
            Cancel
          </Button>
          <Button
            size={35}
            mode="default"
            color="primary"
            styleName="modal-button"
            onClick={() => onSubmit()}
          >
            Continue
          </Button>
        </div>
      </div>
    </Portal>
  );
};

export default CSSModule(Modal, styles);
