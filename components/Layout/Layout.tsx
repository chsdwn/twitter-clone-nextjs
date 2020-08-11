import React from 'react';
import classNames from 'classnames';

import styles from './Layout.module.css';

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return <div className={classNames(styles.layout)}>{children}</div>;
};
