import React ,{useState}from 'react'

export default function HookCounter1() {
    // const initialState = 5
    const [count,setCount] = useState(10);

    
   function increment(){
        setCount(count => count + 1)
    }
    function incrementByFive(){
        increment();
        increment();
        increment();
        increment();
    }
   

  return (
    <div>
        <h1>counter value :{count}</h1>
        <button onClick={increment}>please increment</button>
       {/* <button onClick={() => setCount(initialState)}>reset</button> */}
       {/* <button onClick={() => setCount(count + 1)}>increment</button> */}
       {/* <button onClick={() => setCount(count - 1)}>decrement</button>
       <button onClick={incrementByFive}>incrementbyFiveTimes</button> */}

<button onClick={incrementByFive}>incrementbyFiveTimes</button>
    </div>
  )



}



