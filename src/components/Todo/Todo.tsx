import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

interface TodoProps {
  todo: TodoItem;
  onDelete: (todo: TodoItem) => void;
}

interface TodoItem {
  id: string;
  text: string;
  status: string;
}

export default function Todo({ todo, onDelete }: TodoProps) {
  const { id, text, status } = todo;
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input type="checkbox" id={id} checked={status === 'completed'} />
      <label htmlFor={id}>{text}</label>
      <span>
        <button onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
