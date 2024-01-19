// ChildComponent.js
import React from 'react';
import GrandChildComponent from './GrandChildComponent';

function ChildComponent() {
  return (
    <div>
      <h1>Child Component</h1>
      <GrandChildComponent />
    </div>
  );
}

export default ChildComponent;
