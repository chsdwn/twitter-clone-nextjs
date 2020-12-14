import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { NavButton, TextTitle } from '..';

import { MENU } from '../../constants/components/navigation';

import styles from './Navigation.module.css';

interface IProps {
  flat?: boolean;
}

export const Navigation = ({ flat = false }: IProps) => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      {MENU.map(({ key, path, Icon, IconSelected, title, notify }) => {
        const showTitle = !flat && title.length > 0;
        let selected = false;
        if (router) selected = router.pathname === path;

        return (
          <NavButton
            key={key}
            selected={selected}
            notify={notify?.toString()}
            href={path}
            className={classNames(styles.navButton, key)}>
            {selected ? IconSelected : Icon}
            {showTitle && <TextTitle bold>{title}</TextTitle>}
          </NavButton>
        );
      })}
    </nav>
  );
};
