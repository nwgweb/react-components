import React from "react";
import styles from "./Card.module.scss";

type CardProps = React.AllHTMLAttributes<HTMLDivElement> & {
  title?: string;
};

type Overload = {
  (props: CardProps): JSX.Element;
};

const Card: Overload = ({ title, children, ...rest }) => {
  return (
    <div className={styles.card} {...rest}>
      <div className={styles["card-body"]}>
        <div className={styles["card-title"]}>{title}</div>
        {children}
      </div>
    </div>
  );
};

export default Card;
