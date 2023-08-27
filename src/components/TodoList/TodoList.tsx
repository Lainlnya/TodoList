import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

interface TodoItem {
  id: string;
  text: string;
  status: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => setTodos(todos), [todos]);

  const handleAdd = (todo: TodoItem) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (deleted: TodoItem) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  console.log(todos);

  return (
    <>
      <main>
        <AddTodo onAdd={handleAdd} />
        <section>
          {todos.map((item) => (
            <Todo todo={item} onDelete={handleDelete} />
          ))}
        </section>
      </main>
    </>
  );
}
