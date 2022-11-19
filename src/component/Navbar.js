import React from "react";
// import Body from "./Body";
import Footer from "./Footer";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header id="topnav" className="">
        <div className="topbar-main pb-1">
          <div className="container-fluid">
            <LeftBar />

            <div className="menu-extras topbar-custom">
              <ul className="list-unstyled float-right mb-0">
                <li className="dropdown notification-list">
                  <RightBar />
                </li>
              </ul>
            </div>
            {/* <!-- end menu-extras --> */}
            <div className="clearfix"></div>
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end topbar-main --> */}
        {/* <!-- MENU Start --> */}
        <div className="navbar-custom">
          <div className="container-fluid">
            <div id="navigation">
              {/* <!-- Navigation Menu--> */}
              <ul className="navigation-menu">
                <li className="has-submenu">
                  <a href="index.html" style={{ marginLeft: "-10px" }}>
                    <i className="dripicons-device-desktop cus-das"></i>
                    Plan Type
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* <Body /> */}
      <Footer />
    </div>
  );
};

export default Navbar;
