import React from 'react';

import styles from './TitleBold.module.css';

export const TitleBold = ({ children }) => {
  return <h2 className={styles.titleBold}>{children}</h2>;
};
