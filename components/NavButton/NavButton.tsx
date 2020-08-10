import React from 'react';

import styles from './NavButton.module.css';

export const NavButton = ({ children }) => (
  <button className={styles.navButton}>{children}</button>
);
