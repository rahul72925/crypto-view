import React from "react";
import styles from "./button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.neofi__button} {...props}>
      {children}
    </button>
  );
};

export { Button };
