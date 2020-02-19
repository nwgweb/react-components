import React, { ReactNode } from "react";
import CSSModule from "react-css-modules";
import styles from "./DropdownBox.module.scss";
import { useComponentVisible } from "hooks";

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
    <div styleName="dropdown" ref={ref}>
      <div
        styleName="dropdown-trigger"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {children.trigger}
      </div>
      {isComponentVisible && (
        <div
          styleName={`dropdown-content-${direction ? direction : "down"}-${
            alignment ? alignment : "right"
          }`}
        >
          <div styleName="dropdown-content-header">{header}</div>
          <div>{children.content}</div>
        </div>
      )}
    </div>
  );
};

export default CSSModule(DropdownBox, styles);
