import React from 'react';
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <span role="img" aria-label="metal hand emoji">
        *Metal Hand Emoji*
      </span>
      <span role="img" aria-label="musical keyboard emoji">
        *Musical Keyboard Emoji*
      </span>
      <span role="img" aria-label="musical notes emoji">
        *Musical Notes Emoji*
      </span>
    </h1>
  );
};
