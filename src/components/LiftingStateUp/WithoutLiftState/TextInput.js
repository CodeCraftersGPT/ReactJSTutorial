import React, { useState } from 'react';

function TextInput({ label }) {
  const [value, setValue] = useState('');

  return (
    <div>
      <label>
        {label}:
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
    </div>
  );
}

export default TextInput;
