import React, { useState, useCallback } from 'react';
import { TaskList } from './task-list';
import { AddTask } from './add-task';

export const TodoList = () => {
    const [list, setList] = useState([]);

    const onAdd = (task) => {
        setList([...list, task]);
    };

    return (
        <>
            <AddTask onAdd={onAdd} />
            <TaskList tasks={list} />
        </>
    );
}
