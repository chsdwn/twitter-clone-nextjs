import React from 'react';
import classNames from 'classnames';

import styles from './ColExtra.module.css';

interface IProps {
  children: React.ReactNode;
}

export const ColExtra = ({ children }: IProps) => {
  return <div className={styles.extra}>{children}</div>;
};
