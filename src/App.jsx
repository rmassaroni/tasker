import React, { useState } from 'react';
import './App.css';

const TaskItem = ({ task, onToggle }) => (
  <li>
    <input 
      type="checkbox" 
      checked={task.completed} 
      onChange={() => onToggle(task.id)} 
    />
    {task.text}
  </li>
);

const TaskList = ({ tasks, onToggle }) => (
  <ul>
    {tasks.map(task => (
      <TaskItem key={task.id} task={task} onToggle={onToggle} />
    ))}
  </ul>
);

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </div>
  );
};

export default App;

