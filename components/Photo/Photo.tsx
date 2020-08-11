import React from 'react';
import classNames from 'classnames';

import styles from './Photo.module.css';

interface IProps {
  src?: string;
  alt?: string;
}

export const Photo = ({
  src = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-female-alt-icon.png',
  alt,
}: IProps) => {
  return (
    <div className={classNames(styles.photo)}>
      <img className={styles.img} {...{ src, alt }} />
    </div>
  );
};
