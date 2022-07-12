import React from "react";
import cx from "clsx";
import { ButtonProps } from "./Button.types";
import styles from "./button.css";

function Button(props: ButtonProps) {
  const { children, className, variant, ...rest } = props;
  const classes = cx(
    styles.Button,
    {
      [styles.ButtonSecondary]: variant === "secondary",
    },
    className
  );
  return (
    <button {...rest} className={classes} type="button">
      {children}
    </button>
  );
}

export { Button };
