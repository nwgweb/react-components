import React from 'react';
import styles from './Button.module.scss';
import CSSModules from 'react-css-modules';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: Number;
  mode?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string | undefined;
  shadow?: boolean;
};

const Button: React.FC<ButtonProps> = ({ size, mode = 'default', color = 'default', shadow = true, children, ...rest }) => {
  return (
    <button styleName={`button-${size}-${mode}-${color}-${shadow ? 'shadow' : 'flat'}`} {...rest}>
      {children}
    </button>
  );
};

export default CSSModules(Button, styles);
