import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = ({ task, onClose }) => {
    const { addTask, updateTask } = useTaskContext();
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            updateTask(task.id, { title, description });
        } else {
            addTask({ id: Date.now(), title, description, completed: false });
        }
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-red-700 rounded">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                required
                className="block w-full p-2 mb-2 border rounded"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
                className="block w-full p-2 mb-2 border rounded"
            />
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
                {task ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
};

export default TaskForm;