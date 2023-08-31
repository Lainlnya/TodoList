import React from 'react';
import styles from './Header.module.css';

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
      </ul>
    </header>
  );
}
