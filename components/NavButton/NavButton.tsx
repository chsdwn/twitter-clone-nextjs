import React from 'react';
import classNames from 'classnames';

import { Button } from '..';

import styles from './NavButton.module.css';

interface IProps {
  selected?: boolean;
  notify?: string | undefined;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const NavButton = ({
  selected,
  notify,
  href,
  className,
  children,
  ...props
}: IProps) => (
  <Button
    className={classNames(
      styles.navButton,
      selected && styles.navButtonSelected,
      className,
    )}
    href={href}
    {...props}>
    {notify && <span className={styles.notify}>{notify}</span>}
    {children}
  </Button>
);
