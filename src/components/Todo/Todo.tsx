import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
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
  const handleDelete = () => {
    onDelete(todo);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <span>
        <button onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
