import React from 'react';
import cx from 'clsx';
import { ButtonProps } from './Button.types';
import styles from './button.css';

const Button: React.FC<ButtonProps> = ({
  children, className, variant, ...rest
}) => {
  const classes = cx(
    styles.Button,
    {
      [styles.ButtonSecondary]: variant === 'secondary',
    },
    className,
  );
  return (
    <button {...rest} className={classes} type="button">
      {children}
    </button>
  );
};

export { Button };
