import React from 'react';

import { NavButton, TextTitle } from '..';

import { MENU } from '../../constants/components/navigation';

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

export const Navigation = ({ flat = false, selectedKey = 'home' }: IProps) => {
  return (
    <nav className={styles.nav}>
      {MENU.map(({ key, Icon, IconSelected, title, notify }) => {
        const showTitle = !flat && title.length > 0;
        const selected = selectedKey === key;

        return (
          <NavButton key={key} selected={selected} notify={notify?.toString()}>
            {selected ? <IconSelected /> : <Icon />}
            {showTitle && <TextTitle>{title}</TextTitle>}
          </NavButton>
        );
      })}
    </nav>
  );
};
