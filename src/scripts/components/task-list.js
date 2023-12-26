import React from 'react';
import { Task } from './task';

export const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task, index) => {
                return <Task key={index} name={task}/>
            })}
        </ul>
    );
};
