import React from "react";
import styled from "styled-components";

const ErrorStyles = styled.div`
  text-align: center;
`;

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorStyles>
          <h2>Something went wrong</h2>
        </ErrorStyles>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
