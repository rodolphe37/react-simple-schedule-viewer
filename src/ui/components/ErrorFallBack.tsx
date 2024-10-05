import { Button } from "./Button";
import React from "react";

interface ErrorFallbakProps {
  error: {
    message: string;
  };
  resetErrorBoundary: () => void;
}

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbakProps) {
  return (
    <div role="alert">
      <p className="text-xl font-bold mb-4">Something went wrong: </p>
      <pre className="text-red-500 font-semibold break-words mb-4">
        {error.message}
      </pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
}

export default ErrorFallback;
