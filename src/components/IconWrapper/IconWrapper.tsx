import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './IconWrapper.module.scss';

type CardProps = React.AllHTMLAttributes<HTMLDivElement> & {
  iconClass: string;
  color?: string;
  animationClass?: string;
};

type Overload = {
  (props: CardProps): JSX.Element;
};

const IconWrapper: Overload = ({ iconClass, color, animationClass, ...rest }) => {
  color = !color ? 'default' : color;

  return (
    <div styleName={`icon-wrapper-${color}`} {...rest}>
      <i className={`${iconClass} ${animationClass} animated infinite`}></i>
    </div>
  );
};

export default CSSModules(IconWrapper, styles);
