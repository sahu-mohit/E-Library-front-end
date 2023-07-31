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
  const handlemail = (event) => {
    event.preventDefault();
    setEmail(event.target.value)
    console.log(email)
    if(email !==""){
    BackendCall.getCall("get-user-by-id?userid="+email,"").then((response) =>{
      if(response.data !==""){
        setMsg("Mail id already exist");
      }else{
        setMsg("");
      }
    }).catch(error =>{
      console.log(error);
    })}
  }
  const handleRegister = () => {
    if(firstName === ""){
      setMsg("First Name can not be empty")
    }else if(lastName === ""){
      setMsg("Last Name can not be empty")
    }else if(email === ""){
      setMsg("Email Id can not be empty")
    }else if(contactno === ""){
      setMsg("Contact Number can not be empty")
    }else if(pass === ""){
      setMsg("Password can not be empty")
    }
    else{
    const user = {
      firstname : firstName,
      lastname : lastName,
      emailId : email,
      password : pass,
      contact : contactno
    }

    BackendCall.postCall("registration",user).then((response)=>{
      if(response.data === "success"){
        setFirstName("");
        setLastName("");
        setEmail("");
        setContactNo("");
        setPassword("");
        navigate('/login');      
      }else{
        setMsg(response.data);
      }
    }).catch(error=>{
      console.log(error);
    })}
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <h6 style={{color:'red'}}>{msg}</h6>
      <div className="setdisplay">
        <div className="firstset">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your First name"
              required
              />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
            required
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your Last name"
            />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input
            required
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
            required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handlemail}
              onBlur={handlemail}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
            required
              type="password"
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
            required
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
