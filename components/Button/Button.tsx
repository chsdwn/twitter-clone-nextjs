import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

export const Button = ({ children, className, ...props }) => (
  <button
    type="button"
    className={classNames(styles.button, className)}
    {...props}>
    {children}
  </button>
);
