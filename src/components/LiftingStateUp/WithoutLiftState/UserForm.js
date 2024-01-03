import React from 'react';
import TextInput from './TextInput';

function UserForm() {
  return (
    <form>
      <TextInput label="Name" />
      <TextInput label="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
