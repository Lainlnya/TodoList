import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

interface TodoItem {
  id: string;
  text: string;
  status: string;
}

interface AddTodoProps {
  onAdd: (todo: TodoItem) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <form className={styles.inputForm} onSubmit={handleSubmit}>
      <input
        className={styles.addTodo}
        type="text"
        placeholder="해야할 일을 입력하세요"
        onChange={handleChange}
        value={text}
      />
      <button className={styles.addBtn}>추가</button>
    </form>
  );
}
