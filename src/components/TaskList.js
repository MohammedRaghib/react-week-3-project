import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskForm from './TaskForm';

const TaskList = ({ filteredTasks }) => {
  const { deleteTask, toggleTaskCompletion } = useTaskContext();
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="p-4">
      {filteredTasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between p-4 mb-2 bg-white rounded shadow">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="mr-2"
            />
            <div>
              <span className={task.completed ? 'line-through text-blue-500' : ''}>
                {task.title}
              </span>
              {task.description && (
                <p className="text-sm text-gray-600">{task.description}</p>
              )}
            </div>
          </div>
          <div>
            <button 
              onClick={() => setEditingTask(task)} 
              className="px-2 text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
            <button 
              onClick={() => deleteTask(task.id)} 
              className="px-2 text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {editingTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded max-w-md w-full">
            <TaskForm task={editingTask} onClose={() => setEditingTask(null)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
