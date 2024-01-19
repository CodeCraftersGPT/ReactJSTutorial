import React, { useState } from 'react';

const useStateObject = () => {
    const [state, setState] = useState({
        name: '',
        age: 0,
        email: ''
    });

    return (
        <div>
            <h1>useState Object Example</h1>
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
            <p>Email: {state.email}</p>
        </div>
    );
};

export default useStateObject;
