import React from 'react';

export const Task = ({ task, onRemove }) => {
    return (
        <li>
            <button
              className="remove-button"
              onClick={() => onRemove(task)}
            >x</button>{task}
        </li>
    );
};
