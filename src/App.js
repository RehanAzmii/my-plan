import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";
import ForgotPassword from "./component/ForgotPassword";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { DATACONSTANT } from "./component/constant/data.constant";
import { getCookie } from "./component/liberary/Cookies (1)";
import Index from "./component/Index";

function App() {
  const isCookies = getCookie(DATACONSTANT.SETCOOKIE);
  return (
    <div>
      <ToastContainer />
      {!isCookies ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password" element={<ForgotPassword />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
