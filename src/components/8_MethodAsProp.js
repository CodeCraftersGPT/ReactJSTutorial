import React from 'react';

// Parent component
const ParentComponent = () => {
    const handleClick = () => {
        console.log("Button clicked from child component");
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
};

// Child component
const ChildComponent = ({ handleClick }) => {
    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default ParentComponent;
