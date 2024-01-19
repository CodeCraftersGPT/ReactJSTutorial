// GrandChildComponent.js
import React from 'react';
import GreaterGrandChildComponent from './GreaterGrandChildComponent';

function GrandChildComponent() {
  return (
    <div>
      <h1>Grand Child Component</h1>
      <GreaterGrandChildComponent />
    </div>
  );
}

export default GrandChildComponent;
