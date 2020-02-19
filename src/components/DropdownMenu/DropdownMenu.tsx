import React, { ReactNode } from "react";
import styles from "./DropdownMenu.module.scss";
import { useComponentVisible } from "hooks";

interface Props {
  children: {
    trigger: ReactNode;
    items: MenuItem[];
    direction?: string;
    alignment?: string;
  };
  closeOnSelect?: boolean;
}

type MenuItem = {
  action?: React.MouseEventHandler<HTMLLIElement>;
  title: string;
  iconClass?: string;
};

const DropdownMenu: React.FC<Props> = ({ children, closeOnSelect = false }) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  return (
    <div className={styles["menu-container"]} ref={ref}>
      <div
        className={styles["menu-trigger"]}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {children.trigger}
      </div>
      {isComponentVisible && (
        <ul
          className={
            styles[
              `menu-dropdown-${
                children.direction ? children.direction : "down"
              }-${children.alignment ? children.alignment : "right"}`
            ]
          }
        >
          {children.items.map((menuItem, i) => (
            <li
              key={i}
              onClick={e => {
                menuItem.action && menuItem.action(e);
                closeOnSelect && setIsComponentVisible(false);
              }}
            >
              {menuItem.iconClass && <i className={menuItem.iconClass} />}{" "}
              {menuItem.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
