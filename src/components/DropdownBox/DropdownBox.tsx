import React, { ReactNode } from "react";
import { useComponentVisible } from "hooks";
import styles from "./DropdownBox.module.scss";

interface Props {
  header: String;
  direction?: string;
  alignment?: string;
  children: {
    trigger: ReactNode;
    content: ReactNode;
  };
}

const DropdownBox: React.FC<Props> = ({
  header,
  direction,
  alignment,
  children
}) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  return (
    <div className={styles.dropdown} ref={ref}>
      <div
        className={styles["dropdown-trigger"]}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {children.trigger}
      </div>
      {isComponentVisible && (
        <div
          className={
            styles[
              `dropdown-content-${direction ? direction : "down"}-${
                alignment ? alignment : "right"
              }`
            ]
          }
        >
          <div className={styles["dropdown-content-header"]}>{header}</div>
          <div>{children.content}</div>
        </div>
      )}
    </div>
  );
};

export default DropdownBox;
