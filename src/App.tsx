// import React, { useState } from 'react';
//
// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//
//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, { text: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };
//
//   const toggleTaskCompletion = (index) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };
//
//   return (
//     <div>
//       <h1>Task List</h1>
//       <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//         placeholder="New Task"
//       />
//       <button onClick={addTask}>Add Task</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
//             onClick={() => toggleTaskCompletion(index)}
//           >
//             {task.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//
// export default App;

import React, { useState } from 'react';

// Define the type for a task
interface Task {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  // Define the state with type annotation
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  // Add task function with type annotation for index
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggle task completion function with type annotation for index
  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTaskCompletion(index)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

