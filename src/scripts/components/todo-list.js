import React, { useState, useCallback } from 'react';
import { TaskList } from './task-list';
import { AddTask } from './add-task';

export const TodoList = ({ label }) => {
    const [list, setList] = useState([]);

    const onAdd = (task) => {
        setList([...list, task]);
    };

    const onRemove = (task) => {
      const newList = list.filter(t => t !== task);
      setList(newList);
    };

    return (
        <div className="todo-list">
            <AddTask onAdd={onAdd} label={label} />
            <TaskList tasks={list} onRemove={onRemove} />
        </div>
    );
}
