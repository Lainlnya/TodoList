import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo() {
  return (
    <li className={styles.todo}>
      <input type="checkbox" />
      <label>투두리스트</label>
      <span>
        <button>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
