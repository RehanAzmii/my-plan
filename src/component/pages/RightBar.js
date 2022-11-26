import React from "react";
import { useState } from "react";
import delete_cookie from "../liberary/Cookies (1)";
import { DATACONSTANT } from "../constant/data.constant";

import { useNavigate } from "react-router-dom";

const RightBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState();

  const [data, setData] = useState({
    old: "",
    pass: "",
    cpass: "",
  });

  const inputField = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  let msg = "";
  const checkCondition = () => {
    if (data.cpass === "") {
      msg = "";
    } else if (data.pass !== data.cpass) {
      msg = "confirm password not match";
    } else {
      msg = "";
    }
  };
  checkCondition();
  console.log(msg);
  return (
    <>
      <div>
        {show && (
          <div
            style={{
              display: "flex",
              height: "100vh",
              width: "100vw",
              position: "absolute",
            }}
            onClick={() => setShow(false)}
          ></div>
        )}

        <div className="menu-extras topbar-custom">
          <ul className="list-unstyled float-right mb-0">
            {/* <!-- language--> */}
            <li className="dropdown notification-list hide-phone">
              <a
                className="nav-link dropdown-toggle arrow-none waves-effect"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <span
                  className="fw-bold"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                  }}
                >
                  Rs: 1.00
                </span>
                &nbsp;&nbsp; &nbsp;&nbsp;
                <i className="fas fa-wallet fa-2x"></i>
              </a>
            </li>
            {/* <!-- notification--> */}

            {/* <!-- User--> */}

            <li className="dropdown notification-list">
              <a
                className="nav-link dropdown-toggle arrow-none waves-effect nav-user"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="avatar-1.jpg"
                  alt="user"
                  className="rounded-circle"
                  onClick={() => {
                    setShow(!show);
                  }}
                />
              </a>
              {show === true ? (
                <div
                  className={`dropdown-menu dropdown-menu-right profile-dropdown border-0 ${
                    show ? "show" : ""
                  }`}
                >
                  {/* <!-- item--> */}
                  <div className="dropdown-item noti-title">
                    <h5>Welcome</h5>
                  </div>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-account-circle m-r-5 text-muted"></i>
                    User ID : 1234
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-wallet m-r-5 text-muted"></i> Name :
                    Test
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-settings m-r-5 text-muted"></i>
                    Email :<p>abc@domain.xyz</p>
                  </a>
                  <div class="row">
                    <div class="col text-center">
                      <a
                        href="#"
                        class="btn btn-lg btn-danger"
                        data-toggle="modal"
                        data-target="#smallModal"
                      >
                        Change password
                      </a>
                    </div>
                    <div
                      class="modal fade"
                      id="smallModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="basicModal"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">
                              Change Password
                            </h4>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={() => setShow(false)}
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <label>Enter Old Password</label>
                            <input
                              type="text"
                              name="old"
                              id=""
                              placeholder="Enter Old Password"
                              onChange={inputField}
                            />
                            <label>Enter New Password</label>
                            <input
                              type="password"
                              name="pass"
                              id=""
                              placeholder="Enter New Password"
                              onChange={inputField}
                            />
                            <label>Confirm New Password</label>
                            <input
                              type="password"
                              name="cpass"
                              id=""
                              placeholder="Confirm New Password"
                              onChange={(e) => {
                                inputField(e);
                              }}
                            />
                            <p style={{ color: "red" }}>{msg}</p>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary pl-2">
                              Change Password
                            </button>
                            <button
                              type="button"
                              class="btn btn-dark"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      delete_cookie(DATACONSTANT.SETCOOKIE);
                      const reload = window.location.reload("/");
                      navigate(reload);
                    }}
                  >
                    <i className="mdi mdi-logout m-r-5 text-muted"></i> Logout
                  </a>
                </div>
              ) : null}
            </li>
            <li className="menu-item">
              {/* <!-- Mobile menu toggle--> */}
              <a className="navbar-toggle nav-link">
                <div className="lines">
                  <span></span> <span></span> <span></span>
                </div>
              </a>
              {/* <!-- End mobile menu toggle--> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightBar;
