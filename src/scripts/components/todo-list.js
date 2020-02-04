import React from 'react';
import { Task } from './task';

export const TodoList = () => {
    const tasks = [1, 2, 3, 4];
    return (
        <div>
            <h1>Lista zadań</h1>
            <div id="todo-list">
                {tasks.map((task, index) => {
                    return <Task key={index} />
                })}
            </div>
        </div>
    );
};
