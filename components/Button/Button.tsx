import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

interface IProps {
  className?: string;
  full?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  className,
  full = false,
  children,
  ...props
}: IProps) => (
  <button
    type="button"
    className={classNames(styles.button, full && styles.fullWidth, className)}
    {...props}>
    {children}
  </button>
);
