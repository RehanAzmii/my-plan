import logo from "./logo.svg";
import "./App.css";

import Login from "./component/form/Login";
import Register from "./component/form/Register";
import ForgotPassword from "./component/form/ForgotPassword";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { DATACONSTANT } from "./component/constant/data.constant";
import { getCookie } from "./component/liberary/Cookies (1)";
import Index from "./component/pages/Index";
import Iplist from "./component/pages/Iplist";

function App() {
  const isCookies = getCookie(DATACONSTANT.SETCOOKIE);
  console.log(isCookies);
  return (
    <div>
      <ToastContainer />
      {!isCookies ? (
        <>
          {/* <Navbar /> */}
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
            <Route path="/ipadd" element={<Iplist />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
