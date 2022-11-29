import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./component/form/Login";
import Register from "./component/form/Register";
import ForgotPassword from "./component/form/ForgotPassword";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useNavigate } from "react-router-dom";
import { DATACONSTANT } from "./component/constant/data.constant";
import { getCookie } from "./component/liberary/Cookies (1)";

import Index from "./component/pages/Index";
import Iplist from "./component/pages/Iplist";

function App() {
  const navigate = useNavigate();
  const [page, setPage] = useState(true);

  const x = getCookie(DATACONSTANT.SETCOOKIE);
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
    });

    if (!getCookie(DATACONSTANT.SETCOOKIE)) {
      setPage(false);
      return navigate("/");
    } else {
      setPage(true);
      return navigate("/");
    }
  }, [page, x]);

  return (
    <div>
      {!page ? (
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
