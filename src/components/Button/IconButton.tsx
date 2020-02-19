import React from 'react';
import Button from './Button';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: Number;
  mode?: string;
  color?: string;
  iconClass: string;
};

const IconButton: React.FC<ButtonProps> = ({ iconClass, mode, color, size, children, ...rest }) => {
  return (
    <Button size={size} mode={mode} color={color} {...rest}>
      <i className={`fas ${iconClass}`}></i> {children}
    </Button>
  );
};

export default IconButton;
