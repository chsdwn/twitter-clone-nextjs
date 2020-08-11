import React from 'react';
import classNames from 'classnames';

import { Navigation, ProfileBox, ThemeButton } from '..';

import styles from './ColSidebar.module.css';

interface IProps {
  flat?: boolean;
}

export const ColSidebar = ({ flat }: IProps) => {
  return (
    <div className={classNames(styles.sidebar)}>
      <Navigation flat={flat} />
      <ThemeButton big full>
        Tweet
      </ThemeButton>
      <ProfileBox />
    </div>
  );
};
