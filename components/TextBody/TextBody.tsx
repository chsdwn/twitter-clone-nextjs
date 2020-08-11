import React from 'react';
import classNames from 'classnames';

import styles from './TextBody.module.css';

interface IProps {
  bold?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const TextBody = ({
  bold = false,
  className = undefined,
  children,
  ...props
}: IProps) => {
  return (
    <span
      className={classNames(styles.textBody, bold && styles.bold, className)}
      {...props}>
      {children}
    </span>
  );
};
