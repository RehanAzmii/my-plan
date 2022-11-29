import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { postRequest } from "../service/API_service";
import { setCookie } from "../liberary/Cookies (1)";
import { DATACONSTANT } from "../constant/data.constant";
import { validEmail, validPassword } from "./regex";

import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);

  async function getToken(e) {
    e.preventDefault();
    if (check == true) {
      try {
        var postResponse = await postRequest(DATACONSTANT.LOGIN_URL, {
          domain: DATACONSTANT.DOMAIN_NAME,
          userID: formData.userID,
          Password: formData.password,
        });
        if (postResponse?.statuscode === 1) {
          setCookie(
            DATACONSTANT.SETCOOKIE,
            JSON.stringify(postResponse.data),
            30
          );
          return navigate("/");
        }
      } catch (error) {
        return {
          statuscode: -1,
          msg: error.code,
        };
      }
    } else {
      alert("checked required");
    }
    if (!validEmail.test(formData.email)) {
      setError(true);
    }
    if (!validPassword.test(formData.Password)) {
      setError(true);
    }
  }

  // async function getSession(e) {
  //   // toast.success("Hi ");

  //   if (check == true) {
  //     try {
  //       e.preventDefault();
  //       var postResponse = await postRequest(DATACONSTANT.LOGIN_URL, {
  //         domain: DATACONSTANT.DOMAIN_NAME,
  //         userID: formData.email,
  //         Password: formData.password,
  //       });

  //       if (postResponse.statuscode == 1) {
  //         setCookie(
  //           DATACONSTANT.SETCOOKIE,
  //           JSON.stringify(postResponse.data),
  //           30
  //         );
  //         return navigate("/");
  //       }
  //       console.log(postResponse.data);
  //       console.log(postResponse);
  //       alert(postResponse.msg);
  //       toast.success(postResponse.msg);
  //     } catch (error) {
  //       alert(error.code);
  //       return {
  //         statuscode: -1,
  //         msg: error.code,
  //       };
  //     }
  //   } else {
  //     alert("check box checked");
  //   }
  // }
  const inputCheck = () => {
    setCheck(!check);
  };
  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              <form className="form-horizontal m-t-20" onSubmit={getToken}>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="userID"
                      name="userID"
                      onChange={inputHandler}
                      // value={data.email}
                    />
                  </div>
                  {error && <p>Your email is invalid</p>}
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
                      // value={data.password}
                    />
                  </div>
                  {error && <p>Your password is invalid</p>}
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        onClick={inputCheck}
                        // value={check}s
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
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="form-group m-t-10 mb-0 row">
                  <div className="col-sm-7 m-t-20">
                    <NavLink to="/password" className="text-muted">
                      <i className="mdi mdi-lock"></i>{" "}
                      <small>Forgot your password ?</small>
                    </NavLink>
                  </div>
                  <div className="col-sm-5 m-t-20">
                    <NavLink to="/register" className="text-muted">
                      <i className="mdi mdi-account-circle"></i>{" "}
                      <small>Create an account ?</small>
                    </NavLink>
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
