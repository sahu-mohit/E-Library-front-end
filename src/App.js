// import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import RegistrationPage from "./components/RegistrationPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
<>
<Navbar/>
{/* <LoginPage/> */}
<Router>
  <Routes>
    <Route path="/" element={<LoginPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/registration" element={<RegistrationPage/>} />
    <Route path="/dashboard" element={<Dashboard/>}/>
  </Routes>
</Router>

{/* <h1>Hello</h1> */}
</>      
  );
}

export default App;
