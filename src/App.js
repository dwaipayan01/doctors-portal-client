
import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import About from './Page/About/About';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Appointment from './Page/Appointment/Appointment';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>
        <Route path="/login" element={<Login></Login>} />

      </Routes>
    </div>
  );
}

export default App;
