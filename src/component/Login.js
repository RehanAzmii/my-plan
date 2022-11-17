import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { postRequest } from "../component/service/API_service";
import { setCookie } from "./liberary/Cookies (1)";

const Login = () => {
  const [data, setData] = useState({
    domain: "admin.checkmyplan.in",
    password: "",
    userID: "",
  });
  const inputHandler = (e) => {
    const { value, name } = e.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  console.log(data);

  // const userLogin = async (e) => {
  //   e.preventDefault();
  //   const res = await axios({
  //     method: "POST",
  //     data: data,
  //     url: "/ApiUserAfterLogin/APIUserLogin",
  //     withCredentials: true,
  //     headers: { "Content-type": "application/json" },
  //   });
  //   console.log(res);
  // };
  const userLogin = (e) => {
    e.preventDefault();
    postRequest();
  };
  return (
    <div>
      <div className="accountbg"></div>
      <div className="wrapper-page">
        <div className="card">
          <div className="card-body">
            <div className="text-center m-b-15">
              <a href="index.html" className="logo logo-admin">
                <img src="mylogo.png" height="24" alt="logo" />
              </a>
            </div>
            <div className="p-3">
              <form className="form-horizontal m-t-20">
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="userID"
                      required=""
                      placeholder="userID"
                      name="userID"
                      onChange={inputHandler}
                      value={data.email}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="password"
                      required=""
                      placeholder="Password"
                      name="password"
                      onChange={inputHandler}
                      value={data.password}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />{" "}
                      <label
                        className="custom-control-label"
                        for="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group text-center row m-t-20">
                  <div className="col-12">
                    <button
                      className="btn btn-danger btn-block waves-effect waves-light"
                      type="submit"
                      onClick={userLogin}
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="form-group m-t-10 mb-0 row">
                  <div className="col-sm-7 m-t-20">
                    <Link to="/password" className="text-muted">
                      <i className="mdi mdi-lock"></i>{" "}
                      <small>Forgot your password ?</small>
                    </Link>
                  </div>
                  <div className="col-sm-5 m-t-20">
                    <Link to="/register" className="text-muted">
                      <i className="mdi mdi-account-circle"></i>{" "}
                      <small>Create an account ?</small>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
