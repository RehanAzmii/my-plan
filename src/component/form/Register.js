import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../service/API_service";
import { setCookie } from "../liberary/Cookies (1)";
import { DATACONSTANT } from "../constant/data.constant";
import { validEmail, validNumber, validPincode, validName } from "./regex";
const Register = () => {
  // const initialValues = {
  //   Name: "",
  //   mobileNumber: "",
  //   email: "",
  //   address: "",
  //   pincode: "",
  // };

  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    Name: "",
    mobileNumber: "",
    email: "",
    address: "",
    pincode: "",
  });
  const [check, setCheck] = useState(false);
  const [error, setError] = useState([]);

  const register = async (e) => {
    e.preventDefault();
    if (check === true) {
      try {
        console.log(error);
        let errors = [];
        if (!validEmail.test(formdata.email)) {
          errors.push("email");
        }
        if (!validName.test(formdata.name?.trim())) {
          errors.push("name");
        }
        if (!validNumber.test(formdata.mobileNumber)) {
          errors.push("mobileNumber");
        }
        if (!validPincode.test(formdata.pincode)) {
          errors.push("pincode");
        }
        setError(errors);
        if (error?.length == 0) {
          console.log("123");
          let postResponse = await postRequest(DATACONSTANT.REGISTER_URL, {
            domain: DATACONSTANT.DOMAIN_NAME,
            usercreate: {
              generateotp: "",
              otp: "",
              name: formdata.Name,
              mobileNo: formdata.mobileNumber,
              emailid: formdata.email,
              address: formdata.address,
              pincode: formdata.pincode,
            },
          });
          if (postResponse.statuscode === 1) {
            setCookie(
              DATACONSTANT.SETCOOKIE,
              JSON.stringify(postResponse.data),
              30
            );
            return navigate("/");
          }
          console.log(postResponse);
        }
      } catch (error) {
        return {
          statuscode: -1,
          msg: error.code,
        };
      }
    } else {
      alert("check required");
    }
  };

  const inputHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}/i;
  //   if (!values.name) {
  //     errors.name = "User name is required!";
  //   }
  //   if (!values.name) {
  //     errors.name = "User name is required!";
  //   }
  //   if (!values.email) {
  //     errors.email = "email is required!";
  //   }
  //   return errors;
  // };
  return (
    <div>
      {" "}
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
              {/* <pre>{JSON.stringify(formdata, undefined, 2)}</pre> */}
              <form
                className="form-horizontal"
                onSubmit={register}
                // action="https://mannatthemes.com/zoogler/horizontal/index.html"
              >
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="text"
                      required
                      placeholder="Name"
                      name="name"
                      onChange={inputHandler}
                      // value={formdata.Name}
                    />
                    {error.includes("name") && (
                      <span className="text-danger">*Your name is invalid</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="tel"
                      required
                      placeholder="Mobile Number"
                      onChange={inputHandler}
                      name="mobileNumber"
                      value={formdata.mobileNumber}
                    />
                    {error.includes("mobileNumber") && (
                      <span className="text-danger">
                        *Your Mobile is invalid
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="email"
                      required
                      placeholder="Email"
                      onChange={inputHandler}
                      name="email"
                      value={formdata.email}
                    />
                    {error.includes("email") && (
                      <span className="text-danger">Your email is invalid</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="text"
                      required
                      placeholder="Address"
                      onChange={inputHandler}
                      name="address"
                      value={formdata.address}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="pincode"
                      required
                      placeholder="Pincode"
                      onChange={inputHandler}
                      name="pincode"
                      maxLength={6}
                      value={formdata.pincode}
                    />
                  </div>
                  {error.includes("pincode") && <p>Your pincode is invalid</p>}
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        onClick={() => setCheck(!check)}
                      />
                      <label
                        className="custom-control-label font-weight-normal"
                        for="customCheck1"
                      >
                        I accept
                        <a href="#" className="text-muted">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group text-center row m-t-20">
                  <div className="col-12">
                    <button
                      className="btn btn-primary btn-block waves-effect waves-light"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
                <div className="form-group m-t-10 mb-0 row">
                  <div className="col-12 m-t-20 text-center">
                    <NavLink to="/" className="text-muted">
                      Already have account?
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

export default Register;
