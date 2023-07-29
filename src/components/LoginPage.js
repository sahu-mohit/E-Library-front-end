import React, { useState } from "react";
import "../style/login.css";
function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Here you can handle the login logic, e.g., send a request to the server for authentication.
        // For this example, we'll just print the email and password to the console.
        console.log('Email:', email);
        console.log('Password:', password);
      };

  return (
    <>
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
      </div>
      <div className="form-group">
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="form-group forgot-password">
        <a href="#">Forgot password?</a>
      </div>
      <div className="form-group register-link">
        <span>Don't have an account?</span>
        <a href="/registration">Register here</a>
      </div>
    </div>
</>      
  );
}

export default LoginPage;
