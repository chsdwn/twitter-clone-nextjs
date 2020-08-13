import React from 'react';
import classNames from 'classnames';

import { Button } from '..';

import styles from './IconButton.module.css';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const IconButton = ({ className, children, ...props }: IProps) => {
  return (
    <Button className={classNames(styles.iconButton, className)} {...props}>
      {children}
    </Button>
  );
};
