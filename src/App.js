import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";
import ForgotPassword from "./component/ForgotPassword";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
