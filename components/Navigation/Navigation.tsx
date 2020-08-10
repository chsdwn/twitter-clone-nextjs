import React from 'react';

import { NavButton, TitleBold } from '..';

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
  selectedKey:
    | 'home'
    | 'explore'
    | 'notification'
    | 'messages'
    | 'bookmark'
    | 'lists'
    | 'profile'
    | 'more';
}

export const Navigation = ({ selectedKey }: IProps) => {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>
      <NavButton selected={selectedKey === 'home'}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === 'explore'}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === 'notification'} notify="1">
        <Notification />
        <TitleBold>Notification</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === 'messages'}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === 'lists'}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === 'profile'}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === 'more'}>
        <More />
        <TitleBold>More</TitleBold>
      </NavButton>
    </nav>
  );
};
