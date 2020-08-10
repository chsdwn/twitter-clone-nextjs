import React from 'react';
import classNames from 'classnames';

import styles from './TextTitle.module.css';

interface IProps {
  bold?: boolean;
  children: React.ReactNode;
}

export const TextTitle = ({ bold = undefined, children }: IProps) => {
  return (
    <h2 className={classNames(styles.textTitle, bold && styles.bold)}>
      {children}
    </h2>
  );
};
