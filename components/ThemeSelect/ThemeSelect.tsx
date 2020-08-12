import React, { useContext } from 'react';
import { StoreContext } from '../../store';

import { THEMES } from '../../constants/components/themeSelect';

import styles from './ThemeSelect.module.css';

export const ThemeSelect = () => {
  const store = useContext(StoreContext);

  return (
    <div className={styles.radioContainer}>
      {THEMES.map((theme) => (
        <label className={styles.label}>
          <input
            type="radio"
            value={theme}
            name="theme"
            checked={theme === store.theme}
            onChange={() => store.changeTheme(theme)}
          />
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </label>
      ))}
    </div>
  );
};
