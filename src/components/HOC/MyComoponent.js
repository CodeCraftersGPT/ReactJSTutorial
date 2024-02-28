import withLogger from "./withLogger";

// Example usage of the HOC with a functional component
function MyComponent({ message }) {
    return <div>{message}</div>;
  }
  // Enhanced component with logging capabilities
const MyComponentWithLogger = withLogger(MyComponent);

export default MyComponentWithLogger;
