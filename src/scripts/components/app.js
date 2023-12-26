import React from 'react';
import { ErrorBoundary } from './error-boundary';
import { TodoList } from './todo-list';

export const App = () => {
    return (
        <ErrorBoundary>
            <TodoList label="List no. 1" />
            <TodoList label="List no. 2" />
            <TodoList label="List no. 3" />
        </ErrorBoundary>
    );
};
