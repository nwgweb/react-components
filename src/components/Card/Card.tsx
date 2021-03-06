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
    <div {...rest}>
      <div className={styles.card}>
        <div className={styles["card-body"]}>
          <div className={styles["card-title"]}>{title}</div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
