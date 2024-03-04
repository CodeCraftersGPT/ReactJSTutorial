import React, { useRef } from 'react';

function LoginFormUncontrolled() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log('Login with: ', username, password);
    // Here you would usually send the username and password to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            ref={usernameRef}
            defaultValue=""
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            ref={passwordRef}
            defaultValue=""
          />
        </label>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginFormUncontrolled;
