import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ className, children, ...props }: IProps) => (
  <button
    type="button"
    className={classNames(styles.button, className)}
    {...props}>
    {children}
  </button>
);
