import React, { useEffect, useState } from "react";
import { postRequest } from "../../service/API_service";
import { DATACONSTANT } from "../../constant/data.constant";

function IpModal1({ show1, setShow1 }) {
  const [data, setData] = useState({
    IP: "",
    IPType: "",
    OTP: "",
  });
  //   useEffect(() => {
  //     IpAddress1();
  //   }, []);
  const IpAddress1 = async (e) => {
    try {
      e.preventDefault();
      const postResponse = await postRequest(DATACONSTANT.IP_URL, {
        Version: DATACONSTANT.Version,
        APPID: DATACONSTANT.APPID,
        UserID: DATACONSTANT.UserID,
        SessionID: DATACONSTANT.SessionID,
        IP: data.IP,
        IPType: data.IPType,
        OTP: data.OTP,
        Session: DATACONSTANT.Session,
      });
      console.log(postResponse);
    } catch (error) {
      alert(error.code);
      return {
        statuscode: -1,
        msg: error.code,
      };
    }
  };

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //   console.log(data);
  return (
    <div>
      <div class="modal show" style={{ display: "block" }} id="myModal">
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title">Save IP Address</h3>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setShow1(true)}
              >
                ×
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="">
                  <form>
                    <h4 class="heading mt-3">IP</h4>
                    <input
                      type="text"
                      id=""
                      name="IP"
                      placeholder="xxx.xxx.xxx.xxx"
                      className="form-control"
                      onChange={inputHandler}
                    />
                    <h6 class="detail mt-3">Select IP Type</h6>
                    <select
                      name="IPType"
                      id="cars"
                      className="form-control"
                      onChange={inputHandler}
                    >
                      <option value="volvo">API IP</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                      <option value="volvo">API IP</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>

                    <button
                      type="button"
                      class="btn btn-outline-dark m-3"
                      onClick={IpAddress1}
                    >
                      Save
                    </button>

                    <button
                      type="button"
                      class="btn btn-dark"
                      onClick={() => setShow1(true)}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IpModal1;
