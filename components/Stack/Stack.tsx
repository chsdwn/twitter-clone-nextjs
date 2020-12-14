import React from 'react';
import classNames from 'classnames';

import styles from './Stack.module.css';

interface IProps {
  gap?: number;
  column?: boolean;
  children: React.ReactNode;
}

export const Stack = ({ gap = 10, column = false, children }: IProps) => (
  <div
    className={classNames(styles.stack, column && styles.column)}
    style={{ gap: `${gap}px` }}>
    {children}
  </div>
);
