import React from "react";
import styles from "./IconWrapper.module.scss";

type CardProps = React.AllHTMLAttributes<HTMLDivElement> & {
  iconClass: string;
  color?: string;
  animationClass?: string;
};

type Overload = {
  (props: CardProps): JSX.Element;
};

const IconWrapper: Overload = ({
  iconClass,
  color,
  animationClass,
  ...rest
}) => {
  color = !color ? "default" : color;

  return (
    <div {...rest}>
      <div className={styles[`icon-wrapper-${color}`]}>
        <i className={`${iconClass} ${animationClass} animated infinite`}></i>
      </div>
    </div>
  );
};

export default IconWrapper;
