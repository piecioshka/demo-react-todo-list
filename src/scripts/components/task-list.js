import React from 'react';
import { Task } from './task';

export const TaskList = ({ tasks, onRemove }) => {
    return (
        <ul>
            {tasks.map((task, index) => {
                return <Task key={index} task={task} onRemove={onRemove}/>
            })}
        </ul>
    );
};
