import React from 'react';
import styles from './Todo.module.css';

interface TodoProps {
  todo: TodoItem;
  onDelete: (todo: TodoItem) => void;
  onUpdate: (todo: TodoItem) => void;
}

interface TodoItem {
  id: string;
  text: string;
  status: string;
}

export default function Todo({ todo, onDelete, onUpdate }: TodoProps) {
  const { id, text, status } = todo;

  // 업데이트 과정
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  // 삭제 과정
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label className={styles.checkText} htmlFor={id}>
        {text}
      </label>
      <span>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          삭제하기
        </button>
      </span>
    </li>
  );
}
