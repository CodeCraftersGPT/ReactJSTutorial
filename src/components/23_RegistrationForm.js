import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
  });

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      username: e.target.value,
    });
    // Reset the error message when the user starts typing
    setErrors({
      ...errors,
      username: '',
    });
  };

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.username) {
      setErrors({
        ...errors,
        username: 'Username is required.',
      });
      return; // Prevent form submission if there are errors
    }

    console.log('Form submitted:', formData);
    // Add logic to send data to the server or perform further actions
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleNameChange}
          required
        />
        {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
