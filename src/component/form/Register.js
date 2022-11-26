import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../service/API_service";
import { setCookie } from "../liberary/Cookies (1)";
import { DATACONSTANT } from "../constant/data.constant";

const Register = () => {
  // const initialValues = {
  //   Name: "",
  //   mobileNumber: "",
  //   email: "",
  //   address: "",
  //   pincode: "",
  // };

  const navigate = useNavigate();
  const [formdata, setFormData] = useState();
  const [check, setCheck] = useState(false);
  // const [formError, setFormError] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  // useEffect(() => {}, [formError]);

  const register = async (e) => {
    // setFormError(validate(formdata));
    // setIsSubmit(true);
    if (check === true) {
      try {
        e.preventDefault();
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
                      // value={formdata.name}
                    />
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
                      // value={formdata.mobileNumber}
                    />
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
                      // value={formdata.email}
                    />
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
                      // value={formdata.address}
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
                      // value={formdata.pincode}
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
                      onClick={register}
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
