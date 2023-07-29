// RegistrationForm.js
import React, { useState } from 'react';
import '../style/registration.css';

const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Here you can handle the registration logic, e.g., send a request to the server for registration.
    // For this example, we'll just print the form data to the console.
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <div className="form-group">
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
      </div>
      <div className="form-group">
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
