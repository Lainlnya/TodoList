import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

interface TodoItem {
  id: string;
  text: string;
  status: string;
}

interface filterProps {
  filter: string;
}

export default function TodoList({ filter }: filterProps) {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => setTodos(todos), [todos]);

  const handleAdd = (todo: TodoItem) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (deleted: TodoItem) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const handleUpdate = (updated: TodoItem) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const filtered = getFilteredItems(todos, filter);

  return (
    <>
      <main>
        <AddTodo onAdd={handleAdd} />
        <section>
          {filtered.map((item) => (
            <Todo todo={item} onDelete={handleDelete} onUpdate={handleUpdate} />
          ))}
        </section>
      </main>
    </>
  );
}

const getFilteredItems = (todos: TodoItem[], filter: string) => {
  if (filter === 'all') return todos;

  return todos.filter((todo) => todo.status === filter);
};
