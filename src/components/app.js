import React from 'react';
import { TodoList } from './todo-list';
import { ErrorBoundary } from './error-boundary';

export const App = () => {
    return (
        <div>
            <ErrorBoundary>
                <TodoList />
            </ErrorBoundary>
        </div>
    );
};
