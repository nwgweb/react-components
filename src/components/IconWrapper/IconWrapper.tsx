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
    <div
      className={styles[`icon-wrapper-${color}`] + ` ${rest.className}`}
      {...rest}
    >
      <i className={`${iconClass} ${animationClass} animated infinite`}></i>
    </div>
  );
};

export default IconWrapper;
