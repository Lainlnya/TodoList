import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

interface FilterProps {
  filters: string[];
  filter: string;
  onFilterChange: (filter: string) => void;
}

export default function Header({
  filters,
  filter,
  onFilterChange,
}: FilterProps) {
  const darkContext = useDarkMode();
  if (!darkContext) throw new Error('Expected valid Dark Mode Context');
  const { darkMode, toggleDarkMode } = darkContext;

  return (
    <header>
      <h1 className={styles.h1}>Todo List</h1>
      <ul className={styles.headerUl}>
        {filters.map((filt, i) => (
          <li className={styles.status} key={i}>
            <button
              className={styles.status}
              onClick={() => onFilterChange(filt)}
            >
              {filt}
            </button>
          </li>
        ))}
        <li className={styles.toggleBtn}>
          <button className={styles.toggleBtn} onClick={() => toggleDarkMode()}>
            {darkMode ? 'DARK' : 'LIGHT'}
          </button>
        </li>
      </ul>
    </header>
  );
}
