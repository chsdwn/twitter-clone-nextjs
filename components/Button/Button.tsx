import React from 'react';

import styles from './Button.module.css';

export const Button = ({ children, ...props }) => (
  <button type="button" className={styles.button} {...props}>
    {children}
  </button>
);
