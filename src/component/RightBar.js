import React, { useState } from "react";

const RightBar = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a
        className="nav-link dropdown-toggle arrow-none waves-effect nav-user"
        data-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="false"
        aria-expanded="false"
        onClick={() => setOpen(true)}
      >
        <img src="avatar-1.jpg" alt="user" className="rounded-circle" />
      </a>
      <li className="dropdown notification-list">
        <div className="dropdown-menu dropdown-menu-right profile-dropdown border-0">
          {/* <!-- item--> */}
          <div className="dropdown-item noti-title">
            <h5>Welcome</h5>
          </div>
          <a className="dropdown-item" href="#">
            <i className="mdi mdi-account-circle m-r-5 text-muted"></i>
            Profile
          </a>
          <a className="dropdown-item" href="#">
            <i className="mdi mdi-wallet m-r-5 text-muted"></i> My Wallet
          </a>
          <a className="dropdown-item" href="#">
            <span className="badge badge-success float-right">5</span>
            <i className="mdi mdi-settings m-r-5 text-muted"></i>
            Settings
          </a>
          <a className="dropdown-item" href="#">
            <i className="mdi mdi-lock-open-outline m-r-5 text-muted"></i>
            Lock screen
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            <i className="mdi mdi-logout m-r-5 text-muted"></i> Logout
          </a>
        </div>
      </li>
    </div>
  );
};

export default RightBar;
