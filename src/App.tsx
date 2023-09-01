import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import DarkModeProvider from './context/DarkModeContext';

const filters = ['active', 'completed', 'all'];

const App = () => {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
};

export default App;
