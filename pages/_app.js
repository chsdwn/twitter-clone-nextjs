import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StoreContext } from '../store';

import { THEMES } from '../constants/components/themeSelect';

import '../styles/app.css';

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    const theme = localStorage.getItem('THEME') || THEMES[2];
    setTheme(theme);
  });

  useEffect(() => {
    const $html = document.querySelector('html');
    THEMES.map((theme) => $html.classList.remove(theme));
    $html.classList.add(theme);
  }, [theme]);

  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem('THEME', theme);
  };

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />;
    </StoreContext.Provider>
  );
}
