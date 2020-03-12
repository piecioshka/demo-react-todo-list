import React from 'react';
import { ErrorBoundary } from './error-boundary';
import { TodoList } from './todo-list';

export const App = () => {
    return (
        <div>
            <h1>Lista zadań</h1>
            <ErrorBoundary>
                <TodoList/>
            </ErrorBoundary>
        </div>
    );
};
