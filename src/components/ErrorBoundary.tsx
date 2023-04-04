import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // Set the initial state
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error) {
    // Update state when an error is caught
    console.error(error);
    this.setState({ hasError: true });
  }

  render() {
    // Render the children if no error was caught
    if (!this.state.hasError) {
      return this.props.children;
    }

    // Render an error message if an error was caught
    return (
      <div>
        <h1>Something went wrong.</h1>
      </div>
    );
  }
}

export default ErrorBoundary;
