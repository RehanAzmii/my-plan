import React from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
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
              <form
                className="form-horizontal"
                action="https://mannatthemes.com/zoogler/horizontal/index.html"
              >
                <div className="alert alert-success alert-dismissible">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  Enter your <b>Email</b> and instructions will be sent to you!
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="email"
                      required=""
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group text-center row m-t-20">
                  <div className="col-12">
                    <button
                      className="btn btn-danger btn-block waves-effect waves-light"
                      type="submit"
                    >
                      Send Email
                    </button>
                  </div>
                </div>
                <Link to="/">⬅back</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      i
    </div>
  );
};

export default ForgotPassword;
