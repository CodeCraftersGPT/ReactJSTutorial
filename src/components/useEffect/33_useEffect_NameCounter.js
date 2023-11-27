// useEffect with name and counter component.

import React, { useState, useEffect } from 'react';

const NameCounter = () =>{
    const [name,setName] = useState('James');
    const [counter,setCounter] = useState(5);

    useEffect(()=>{ 
        // dislay name and counter in console.
        console.log('Name: ',name);
        console.log('Counter: ',counter);

        return () => {
            // component unmount stage clean up.
            // if we need to unsubscribe any event or cancel any api request then we can do here.
            // remove the cookies etc
            console.log('Name: ',name);
            console.log('Counter: ',counter);
        }

    },[]);

    // define useEffect for name. and print name into console

    useEffect(()=>{
        console.log('Name: ',name);
    },[name]);

    // define useEffect for counter. and print counter into console

    useEffect(()=>{
        console.log('Counter: ',counter);
    },[counter]);

    // define useEffect for name and counter. and print name and counter into console

    useEffect(()=>{
        console.log('Name: ',name);
        console.log('Counter: ',counter);
    },[name,counter]);


       
    

    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Counter: {counter}</h1>
            <button onClick={()=> setName('John')}>Change Name</button>
            <button onClick={()=> setCounter(10)}>Change Counter</button>


            
        </div>
    )
}

export default NameCounter;




