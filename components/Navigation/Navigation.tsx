import React from 'react';

import { NavButton, TextTitle } from '..';

import {
  Bookmark,
  Home,
  Explore,
  Lists,
  Messages,
  More,
  Notification,
  Profile,
  Twitter,
} from '../icons';
import styles from './Navigation.module.css';

interface IProps {
  flat?: boolean;
  selectedKey?:
    | 'home'
    | 'explore'
    | 'notification'
    | 'messages'
    | 'bookmark'
    | 'lists'
    | 'profile'
    | 'more';
}

export const Navigation = ({ flat = false, selectedKey }: IProps) => {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>
      <NavButton selected={selectedKey === 'home'}>
        <Home />
        <TextTitle>Home</TextTitle>
      </NavButton>
      <NavButton selected={selectedKey === 'explore'}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavButton>
      <NavButton selected={selectedKey === 'notification'} notify="1">
        <Notification />
        <TextTitle>Notification</TextTitle>
      </NavButton>
      <NavButton selected={selectedKey === 'messages'}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavButton>
      <NavButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TextTitle>Bookmark</TextTitle>
      </NavButton>
      <NavButton selected={selectedKey === 'lists'}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavButton>
      <NavButton selected={selectedKey === 'profile'}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavButton>
      <NavButton selected={selectedKey === 'more'}>
        <More />
        <TextTitle>More</TextTitle>
      </NavButton>
    </nav>
  );
};
