import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <TodoList />
    </>
  );
};

export default App;
