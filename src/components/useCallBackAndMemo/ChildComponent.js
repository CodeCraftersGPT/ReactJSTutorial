import React from 'react';

const ChildComponent = React.memo(({ onIncrement }) => {
  console.log('Child Component Rendered');
  return (
    <button onClick={onIncrement}>Increment</button>
  );
});

export default ChildComponent;
