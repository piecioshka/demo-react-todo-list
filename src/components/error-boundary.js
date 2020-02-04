import React from 'react';

export class ErrorBoundary extends React.Component {

    componentDidCatch(error, message) {
        console.log({ error, message });
    }

    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}