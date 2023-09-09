import React, { useState } from 'react';

function ConditionalRenderingExample() {
  // Initialize the state for isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle the isLoggedIn state
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={toggleLoginStatus}>Log Out</button>
        </div>
      ) : (
        <div>
          <p>Please Log In</p>
          <button onClick={toggleLoginStatus}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default ConditionalRenderingExample;
