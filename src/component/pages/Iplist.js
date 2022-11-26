import React, { useState } from "react";
import IpModal from "../form/modal/IpModal";
import IpModal1 from "../form/modal/IpModal1";

const Iplist = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [modal, setModal] = useState();

  return (
    <div>
      <body>
        <div id="__p" class="main-temp-body">
          <div class="container-fluid">
            <div class="row">
              <input type="hidden" id="hdnIP" />
              <input type="hidden" id="hdnIPType" />
              <div class="col-md-12">
                <div class="card mt-2">
                  <div class="card-header bg-gradientorange text-white">
                    <i class="fas fa-link"></i> IPAddress Master
                    <div class="float-right">
                      <div class="input-group">
                        <input
                          id="txtSearch"
                          class="form-control text-left"
                          placeholder="Search IPAddress"
                        />
                        <div class="input-group-append">
                          <button
                            id="btnNew"
                            class="btn btn-default btn-sm"
                            onClick={() => {
                              setShow(!show);
                              setShow1(!show1);
                            }}
                          >
                            New
                          </button>
                          {!modal
                            ? !show1 && (
                                <IpModal1 show1={show1} setShow1={setShow1} />
                              )
                            : !show && (
                                <IpModal show={show} setShow={setShow} />
                              )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body p-1">
                    <div class="table-responsive calcHeight">
                      <table
                        class="table table-bordered table-striped table-responsive-sm fixedHeader"
                        id="tblIPAddress"
                      >
                        <thead class="bg-tableth">
                          <tr>
                            <th>#</th>
                            <th>Actions</th>
                            <th>User ID</th>
                            <th>User</th>
                            <th>Mobile Number</th>
                            <th>IPAddress</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>LastModified</th>
                            <th>Source</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-item-id="6">
                            <td>1</td>
                            <td>
                              <div class="btn-group dropup">
                                <a
                                  href="#"
                                  id="act_1"
                                  class="btn btn-outline-dark btn-sm btn-block dropdown-toggle"
                                  role="button"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expaned="false"
                                ></a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="act_1"
                                >
                                  <h6 class="dropdown-header">Action Menu</h6>
                                  <a
                                    href="#"
                                    class="dropdown-item ddlRemove"
                                    id="rem_6"
                                  >
                                    Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>2</td>
                            <td>Testround</td>
                            <td>9044004486</td>
                            <td>::1</td>
                            <td>APIUser</td>
                            <td>
                              <label class="switch">
                                <input type="checkbox" />
                                <span
                                  class="slider round"
                                  style={{ height: "30px" }}
                                ></span>
                              </label>
                            </td>
                            <td>25 Nov 2022 02:04:51:360 PM</td>
                            <td>APP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Iplist;
