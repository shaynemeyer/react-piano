import React from 'react';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content} />
      <Footer />
    </div>
  );
}

export default App;
