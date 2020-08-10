import React from 'react';
import classNames from 'classnames';

import { Button } from '..';

import styles from './ThemeButton.module.css';

interface IProps {
  className: string;
  big?: boolean;
  children: React.ReactNode;
}

export const ThemeButton = ({
  className,
  big = false,
  children,
  ...props
}: IProps) => (
  <Button
    className={classNames(styles.themeButton, big && styles.big, className)}
    {...props}>
    {children}
  </Button>
);
