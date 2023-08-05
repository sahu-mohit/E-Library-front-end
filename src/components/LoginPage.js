import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';
import "../style/login.css";
import BackendCall from "../service/BackendCall";
function LoginPage() {
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Here you can handle the login logic, e.g., send a request to the server for authentication.
        // For this example, we'll just print the email and pass to the console.
        // console.log('Email:', email);
        // console.log('pass:', pass);

      const data = {
        emailId : email,
        password : pass
      }
        BackendCall.postCall("login",data).then(responce=>{
          if(responce.data.message === "success"){
            alert("Succesfully Loged in ");
            navigate('/dashboard');
          }else{
            alert("UserId pass not matched");
          }
        }).catch(error => {
            console.log(error);
        })

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
        <label>password:</label>
        <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} placeholder="Enter your password" />
      </div>
      <div className="form-group">
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="form-group forgot-pass">
        <a href="#">Forgot pass?</a>
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
