import React from 'react';
import classNames from 'classnames';

import { Button, Photo, TextBody } from '..';
import { ArrowBottom } from '../icons';

import styles from './ProfileBox.module.css';

interface IProps {
  name?: string;
  slug?: string;
  flat?: boolean;
}

export const ProfileBox = ({
  name = 'Hulusi',
  slug = 'chsdwn',
  flat = false,
}: IProps) => {
  return (
    <Button className={classNames(styles.profileBox)}>
      <Photo size={39} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  );
};
