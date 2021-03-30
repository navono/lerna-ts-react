import React from 'react';
import cx from 'clsx';
import { TextProps } from './Text.types';
import styles from './styles.css';

const Text: React.FC<TextProps> = ({
  children, className, as = 'p', variant, ...rest
}) => {
  const textVariant = styles[variant] || 'Body';
  const classes = cx(
    styles.Text,
    {
      [textVariant]: variant,
    },
    className,
  );

  return React.createElement(
    as,
    {
      ...rest,
      className: classes,
    },
    children,
  );
};

export { Text };
