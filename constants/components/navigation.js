import React from 'react';
import {
  Bookmark,
  Home,
  HomeFill,
  Explore,
  Lists,
  Messages,
  More,
  Notification,
  Profile,
  ProfileFill,
  Twitter,
  ExplorerFill,
  NotificationFill,
  MessagesFill,
  BookmarkFill,
  ListsFill,
} from '../../components/icons';

export const MENU = [
  {
    key: 'twitter',
    Icon: Twitter,
    IconSelected: Twitter,
    title: '',
  },
  {
    key: 'home',
    Icon: Home,
    IconSelected: HomeFill,
    title: 'Home',
  },
  {
    key: 'explore',
    Icon: Explore,
    IconSelected: ExplorerFill,
    title: 'Explore',
  },
  {
    key: 'notification',
    Icon: Notification,
    IconSelected: NotificationFill,
    title: 'Notification',
    notify: 17,
  },
  {
    key: 'messages',
    Icon: Messages,
    IconSelected: MessagesFill,
    title: 'Messages',
  },
  {
    key: 'bookmark',
    Icon: Bookmark,
    IconSelected: BookmarkFill,
    title: 'Bookmark',
  },
  {
    key: 'lists',
    Icon: Lists,
    IconSelected: ListsFill,
    title: 'Lists',
  },
  {
    key: 'profile',
    Icon: Profile,
    IconSelected: ProfileFill,
    title: 'Profile',
  },
  {
    key: 'more',
    Icon: More,
    IconSelected: More,
    title: 'More',
  },
];
