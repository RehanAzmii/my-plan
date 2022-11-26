import React, { useState } from "react";
import { Data } from "../service/Data";
import swal from "sweetalert";
import { DATACONSTANT } from "../constant/data.constant";
import { postRequest } from "../service/API_service";

const Body = () => {
  const [data, setData] = useState([]);
  async function getPlan() {
    try {
      let __x = JSON.parse();
      var postResponse = await postRequest(DATACONSTANT.GET_PLAN_URL, {
        version: DATACONSTANT.Version,
        APPID: DATACONSTANT.APPID,
        UserID: __x?.userID,
        SessionID: __x?.sessionID,
        Session: __x?.session,
      });
      console.log("plans", postResponse);
      setData(postResponse?.data);
    } catch (error) {
      return {
        statuscode: -1,
        msg: error.code,
      };
    }
  }
  getPlan();
  const buyPlan = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Array", "Your imaginary file is safe!", "error");
      }
    });
  };

  return (
    <>
      <div className="bg-info">
        <div class="wrapper">
          <div class="container-fluid">
            <h1 className="text-center mt-5">Our Price</h1>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row d-flex justify-content-center">
            {Data.map((item, id) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-3 " key={id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body  text-center mt-3">
                      <h5 className="card-title">Rs:{item["price"]}</h5>
                      <p className="card-text">Package id:{item["id"]}</p>
                      <p className="card-text">
                        Basic Plan &nbsp;{item["validity"]}&nbsp;days
                      </p>
                      <p className="card-text">{item["note"]}</p>
                      <p className="card-text">
                        Daily Hit Count:{item["hitCount"]}
                      </p>
                      <p className="card-text">Services:{item["service"]}</p>
                      <p className="card-text">{item["isActive"]}</p>

                      {item["isActive"] ? (
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            alert("activated");
                          }}
                        >
                          ACTIVATED
                        </button>
                      ) : (
                        <button className="btn btn-primary" onClick={buyPlan}>
                          BUY PLAN
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
