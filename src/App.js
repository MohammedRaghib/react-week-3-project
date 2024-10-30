import React from 'react';
import { TaskProvider, useTaskContext } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import './App.css'

const TodoApp = () => {
  const [isAdding, setIsAdding] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const { tasks } = useTaskContext();

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-lg p-6 mx-auto mt-10 bg-green-500 rounded shadow">
      <h1 className="text-2xl font-bold text-center">To-Do App</h1>
      <SearchBar onSearch={setSearchQuery} />
      <button
        onClick={() => setIsAdding(!isAdding)}
        className="w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        {isAdding ? 'Cancel' : 'Add Task'}
      </button>
      {isAdding && <TaskForm onClose={() => setIsAdding(false)} />}
      <TaskList filteredTasks={filteredTasks} />
    </div>
  );
};

const App = () => {
  return (
    <TaskProvider>
      <TodoApp />
    </TaskProvider>
  );
};

export default App;