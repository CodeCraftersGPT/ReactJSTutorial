import React, { useState, useEffect } from 'react';

function NameCounterComponent() {
  const [name, setName] = useState('John');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Counter state changed:', counter);
  });

  return (
    <div>
      <h1>Name and Counter</h1>
      <div>
        <h2>Name: {name}</h2>
        <button onClick={() => setName('Alice'+counter )}>Update Name</button>
      </div>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      </div>
    </div>
  );
}

export default NameCounterComponent;
