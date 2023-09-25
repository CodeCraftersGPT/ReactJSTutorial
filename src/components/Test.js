// create simple component with jsx
 import React,{useEffect,useState} from 'react';
 const Test = () => {
    //define useeffect hook with simple console log
    //define name and count state
    const [name,setName] = useState('');
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log('test component mounted');
    },[]);

    // define useEffect to call when name state changes
    useEffect(() => {
        console.log('name state changed' + name);
    },[name]);

    // define useEffect to call when count state changes    
    useEffect(() => {
        console.log('count state changed' + count);
    },[count]);

    // useEffect(() => {
    //     console.log('name and count state changed' + name + count);
    // },[name,count]);

    return (
    <div>
        Test
        <br/>
        <h1>{name}</h1>
        <h1>{count}</h1>
        <button onClick={() => setName('test')}>Set Name</button>
        <button onClick={() => setCount(count + 1)}>Set Count</button>
        
        </div>);
     }
    export default Test;