import React ,{useState}from 'react'

export default function HookCounter() {
    const [count,setCount] = useState(10);
  return (
    <div>
        <h1>counter value :{count}</h1>
       
    </div>
  )
}



