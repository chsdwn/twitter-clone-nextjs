import React from 'react';
import classNames from 'classnames';

import styles from './ColMain.module.css';

interface IProps {
  children: React.ReactNode;
}

export const ColMain = ({ children }: IProps) => {
  return <div className={classNames(styles.main)}>{children}</div>;
};
