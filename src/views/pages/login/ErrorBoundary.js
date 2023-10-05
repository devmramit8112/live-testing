import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, errorInfo) => {
    // You can log or report the error here
    console.error(error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <p>Oops! Something went wrong.</p>; // Display a user-friendly error message
  }

  return children;
}

export default ErrorBoundary;
