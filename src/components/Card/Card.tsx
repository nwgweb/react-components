import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Card.module.scss";

type CardProps = React.AllHTMLAttributes<HTMLDivElement> & {
  title?: string;
};

type Overload = {
  (props: CardProps): JSX.Element;
};

const Card: Overload = ({ title, children, ...rest }) => {
  return (
    <div styleName="card" {...rest}>
      <div styleName="card-body">
        <div styleName="card-title">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default CSSModules(Card, styles);
