import React from 'react';
import classNames from 'classnames';
import { useWindowSize } from '../../hooks/useWindowSize';

import { ColExtra, ColMain, ColSidebar } from '..';

import { DESKTOP_SIZE, TABLET_SIZE } from '../../constants';

import styles from './Layout.module.css';

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  const size = useWindowSize();
  return (
    <div className={classNames(styles.layout)}>
      <ColSidebar flat={size.width < DESKTOP_SIZE} />
      <ColMain>{children}</ColMain>
      {size.width > TABLET_SIZE && <ColExtra>extra</ColExtra>}
    </div>
  );
};
