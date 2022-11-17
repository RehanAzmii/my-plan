import React from "react";
import { Data } from "./Data";
const Body = () => {
  return (
    <>
      <div className="bg-info">
        <div class="wrapper">
          <div class="container-fluid">
            <h1 className="text-center mt-5">Our Price</h1>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
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

                      <a href="" className="btn btn-primary">
                        BUY PLAN
                      </a>
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
