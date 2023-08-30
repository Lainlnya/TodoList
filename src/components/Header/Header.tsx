import React from 'react';

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
      <h1>Todo List</h1>
      {filters.map((filt, i) => (
        <li key={i}>
          <button onChange={() => onFilterChange(filt)}>{filt}</button>
        </li>
      ))}
      <ul></ul>
    </header>
  );
}
