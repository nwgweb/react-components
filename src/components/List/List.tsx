import React from "react";
import styles from "./List.module.scss";

type ListProps = React.AllHTMLAttributes<HTMLUListElement> & {
  scrollbox?: boolean;
};

const ListElement: React.FC<ListProps> = ({ scrollbox, children }) => {
  return (
    <ul className={scrollbox ? styles["list--scrollbox"] : styles["list"]}>
      {children}
    </ul>
  );
};

type ListItemProps = React.AllHTMLAttributes<HTMLLIElement> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  key: string | number | undefined;
};

const ListItemElement: React.FC<ListItemProps> = ({
  key,
  children,
  ...rest
}) => {
  return (
    <li key={key} className={styles["listItem"]} {...rest}>
      {children}
    </li>
  );
};

const Container = ListElement;
const Item = ListItemElement;

export default { Container, Item };
