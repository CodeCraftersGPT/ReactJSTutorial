import React, { useState } from 'react';
import TextInputLS from './TextInputLS';

function UserFormLS() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting:', { name, email });
    // Further submission logic goes here
  };

 const handleNameChange = (event) => {
    setName(event.target.value);
  };

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };
  return (
    <form onSubmit={handleSubmit}>
      <TextInputLS label="Name" value={name} onChange={handleNameChange} />
      <TextInputLS label="Email" value={email} onChange={handleEmailChange} />
      <button type="submit">Submit</button>
    </form>
  );}
export default UserFormLS;
