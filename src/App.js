
import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import About from './Page/About/About';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Appointment from './Page/Appointment/Appointment';
import Signup from './Page/Login/Signup';
import RequireAuth from './Page/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Page/Dashboard/Dashboard';
import MyAppointment from './Page/Dashboard/MyAppointment';
import MyReviews from './Page/Dashboard/MyReviews';
import Users from './Page/Dashboard/Users';
import RequireAuthAdmin from './Page/RequireAuth/RequireAuthAdmin';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appointment" element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="myreview" element={<MyReviews></MyReviews>}></Route>
          <Route path="user" element={<RequireAuthAdmin><Users></Users></RequireAuthAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>}>

        </Route> */

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
