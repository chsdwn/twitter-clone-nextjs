import React from 'react';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import classNames from 'classnames';

import { IconButton, Photo } from '..';

import { Like, Reply, Retweet, Share } from '../icons';
import styles from './Tweet.module.css';

interface IProps {
  text: string;
  photo?: string;
  name?: string;
  slug?: string;
  datetime?: Date;
}

export const Tweet = ({ text, photo, name, slug, datetime }: IProps) => {
  return (
    <article className={styles.tweet}>
      <div className={styles.avatar}>
        <Photo />
      </div>
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span> ·{' '}
          <span>{formatDistanceToNowStrict(datetime)}</span>
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Reply />
            </IconButton>
            <span>4</span>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Retweet />
            </IconButton>
            <span>16</span>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Like />
            </IconButton>
            <span>42</span>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  );
};
