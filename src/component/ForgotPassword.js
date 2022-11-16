import React from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div>
      <div class="accountbg"></div>
      <div class="wrapper-page">
        <div class="card">
          <div class="card-body">
            <div class="text-center m-b-15">
              <a href="index.html" class="logo logo-admin">
                <img src="mylogo.png" height="24" alt="logo" />
              </a>
            </div>
            <div class="p-3">
              <form
                class="form-horizontal"
                action="https://mannatthemes.com/zoogler/horizontal/index.html"
              >
                <div class="alert alert-success alert-dismissible">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  Enter your <b>Email</b> and instructions will be sent to you!
                </div>
                <div class="form-group row">
                  <div class="col-12">
                    <input
                      class="form-control"
                      type="email"
                      required=""
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-group text-center row m-t-20">
                  <div class="col-12">
                    <button
                      class="btn btn-danger btn-block waves-effect waves-light"
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
