import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Task = ({ id, text, completed, onComplete, onDelete }) => {
  const taskClassName = completed ? 'taskCompleted' : '';

  return (
    <div className={`task ${taskClassName}`} onClick={() => onComplete(id)}>
      <span>{text}</span>
      <button onClick={(e) => { e.stopPropagation(); onDelete(id); }}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Task;
