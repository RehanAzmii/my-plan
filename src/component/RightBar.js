import React from "react";

const RightBar = () => {
  return (
    <div>
      <a
        className="nav-link dropdown-toggle arrow-none waves-effect nav-user"
        data-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="false"
        aria-expanded="false"
      >
        <img src="avatar-1.jpg" alt="user" className="rounded-circle" />
      </a>
      <li class="dropdown notification-list">
        {/* <a
          class="nav-link dropdown-toggle arrow-none waves-effect nav-user"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <img
            src="assets/images/users/avatar-1.jpg"
            alt="user"
            class="rounded-circle"
          />
        </a> */}
        <div class="dropdown-menu dropdown-menu-right profile-dropdown border-0">
          {/* <!-- item--> */}
          <div class="dropdown-item noti-title">
            <h5>Welcome</h5>
          </div>
          <a class="dropdown-item" href="#">
            <i class="mdi mdi-account-circle m-r-5 text-muted"></i>
            Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="mdi mdi-wallet m-r-5 text-muted"></i> My Wallet
          </a>
          <a class="dropdown-item" href="#">
            <span class="badge badge-success float-right">5</span>
            <i class="mdi mdi-settings m-r-5 text-muted"></i>
            Settings
          </a>
          <a class="dropdown-item" href="#">
            <i class="mdi mdi-lock-open-outline m-r-5 text-muted"></i>
            Lock screen
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">
            <i class="mdi mdi-logout m-r-5 text-muted"></i> Logout
          </a>
        </div>
      </li>
    </div>
  );
};

export default RightBar;
