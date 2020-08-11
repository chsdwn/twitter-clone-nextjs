import React from 'react';
import classNames from 'classnames';

import { Navigation, ProfileBox, ThemeButton } from '..';

import styles from './ColSidebar.module.css';

interface IProps {
  flat?: boolean;
}

export const ColSidebar = ({ flat = false }: IProps) => {
  return (
    <div className={classNames(styles.sidebar)}>
      <Navigation flat={flat} />
      <div className={styles.tweet}>
        <ThemeButton big full={!flat}>
          {flat ? 'a' : 'Tweet'}
        </ThemeButton>
      </div>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
};
