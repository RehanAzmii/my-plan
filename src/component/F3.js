import React, { useState } from "react";
import { useEffect } from "react";
import "./event.css";

const Form3 = () => {
  const [fullName, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    if (localStorage.getItem("data")) {
      console.log(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  const inputHandler = (e) => {
    const { value, name } = e.target;
    // const value = e.target.value;
    // const name = e.target.name;
    //console.log(value);
    //console.log(name);
    setfullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
      // console.log(preValue);
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };

  const onSubmits = (e) => {
    e.preventDefault();
    // alert("form submitted");
    localStorage.setItem("data", JSON.stringify(fullName));
  };

  return (
    <>
      <div className="cus-top">
        <form onSubmit={onSubmits}>
          <div>
            {/* <h1 style={{ textAlign: "center", color: "white" }}>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p style={{ textAlign: "center", color: "white" }}>
              {fullName.email}
            </p>
            <p style={{ textAlign: "center", color: "white" }}>
              {fullName.phone}
            </p> */}
            <input
              id="input"
              type="text"
              placeholder="Enter Your firstName"
              name="fname"
              onChange={inputHandler}
              value={fullName.fname}
            />
            <br />

            <input
              id="input"
              type="text"
              placeholder="Enter Your lastname"
              name="lname"
              onChange={inputHandler}
              value={fullName.lname}
            />
            <br />

            <input
              id="input"
              type="email"
              placeholder="Enter Your email"
              name="email"
              onChange={inputHandler}
              value={fullName.email}
              autoComplete="off"
            />
            <br />

            <input
              id="input"
              type="number "
              placeholder="Enter Your number"
              name="phone"
              onChange={inputHandler}
              value={fullName.phone}
            />

            <br />

            <button type="submit" style={{ display: "block", margin: "auto" }}>
              Submit Me
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form3;
