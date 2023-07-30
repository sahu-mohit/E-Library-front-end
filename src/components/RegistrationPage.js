// RegistrationForm.js
import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';
import "../style/registration.css";
import BackendCall from "../service/BackendCall";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactno, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const passwordhandle= (event)=>{
    if(pass !== event.target.value){
      setMsg("Password Doesn't matched!");
      console.log(event.target.value);
      setConfirmPassword(event.target.value)
    }else{
      setMsg("");
      setConfirmPassword(event.target.value)
      console.log(event.target.value);
    }
    
  }
  const handleRegister = () => {
    // Here you can handle the registration logic, e.g., send a request to the server for registration.
    // For this example, we'll just print the form data to the console.
    // console.log(' Name:', firstName);
    // console.log('Email:', email);
    // console.log('Password:', password);
    // console.log('Confirm Password:', confirmPassword);
    const user = {
      firstname : firstName,
      lastname : lastName,
      emailId : email,
      password : pass,
      contact : contactno
    }

    BackendCall.postCall("registration",user).then((response)=>{
      console.log(response);
      if(response.data === "successefully"){
        setFirstName("");
        setLastName("");
        setEmail("");
        setContactNo("");
        setPassword("");
        navigate('/login');      
      }else{
        alert("Somthing went wrong");
      }
    }).catch(error=>{
      console.log(error);
    })
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <div className="setdisplay">
        <div className="firstset">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your First name"
            />
          </div>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your Last name"
            />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input
              type="text"
              value={contactno}
              onChange={(e) => setContactNo(e.target.value)}
              placeholder="Enter your Contact name"
            />
          </div>
        </div>
        <div className="secondset">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <p>{msg}</p>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              // onChange={(e) => setConfirmPassword(e.target.value)}
              onChange={passwordhandle}
              placeholder="Confirm your password"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
            <button onClick={handleRegister}>Register</button>
          </div>
    </div>
  );
};

export default RegistrationPage;
