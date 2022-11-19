import axios from "axios";
import { getCookie } from "../liberary/Cookies (1)";
import { DATACONSTANT } from "../constant/data.constant";

// const baseURL = "https://roundpay.net";
const baseURL = DATACONSTANT.BASE_URL;
//const baseURL="https://api.torentx.org:3005/";
const getStoredAuthToken = () => {
  let c = getCookie(DATACONSTANT.SETCOOKIE);
  return !c ? {} : JSON.parse(c)?.token;
  //return localStorage.token;
};

function getHeaders() {
  return {
    accept: "application/json",
    authorization: `Bearer ${getStoredAuthToken()}`,
  };
}

function postHeaders() {
  return {
    "Content-Type": "application/json",
    authorization: `Bearer ${getStoredAuthToken()}`,
  };
}

export const getRequest = (endpoint, data = null) =>
  axios
    .get(`${baseURL}${endpoint}?${new URLSearchParams(data).toString()}`, {
      headers: getHeaders(),
      mode: "no-cors",
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(`Error in get request to entpoint ${endpoint}`, err);
      throw err;
    });

export const postRequest = async (endpoint, data = {}) => {
  return await axios
    .post(baseURL + endpoint, data, {
      headers: postHeaders(),
      mode: "no-cors",
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(`Error in post request to endpoint ${endpoint}`, err);
      throw err;
    });
};
