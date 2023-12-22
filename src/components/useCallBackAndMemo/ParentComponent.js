import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  //`increment` function is memoized with useCallback
  const increment = useCallback(() => {

    // in this case you are not refering the any function event argument any other state variables. then you can memoize
    setCount((c) => c + 1);
  }, []);

  // `increment` function is not memoized with useCallback

  // const increment = () => {
  //   setCount((c) => c + 1);   // this is going to create a new function every time the component renders and new function reference is passed to the child component
  // }


  return (
    <div>
      <ChildComponent onIncrement={increment} />
      <p>Count: {count}</p>
    </div>
  );
}

export default ParentComponent;
