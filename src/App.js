// import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import RegistrationPage from "./components/RegistrationPage";

function App() {
  return (
<>
<Navbar/>
<Router>
  <Routes>
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/registration" element={<RegistrationPage/>} />
  </Routes>
</Router>

{/* <h1>Hello</h1> */}
</>      
  );
}

export default App;
