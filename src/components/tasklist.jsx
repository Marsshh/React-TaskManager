import React, { useState } from 'react';
import Task from './task';
import TaskForm from './taskform';

const TaskList = () => {
  //definir tasks
  const [tasks, setTasks] = useState([]);
  const [textTask, setTextTask] = useState('');
//funcio per agregar tasks
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
//eliminar per id
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };
//task completed per id
  const completeTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <h2>Task List</h2>
      <TaskForm addTask={addTask} />
      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          onComplete={completeTask}
          onDelete={deleteTask}
        />
      ))}
    </>
  );
};

export default TaskList;
