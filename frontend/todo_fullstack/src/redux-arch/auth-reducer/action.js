import axios from "axios";
import * as types from "./action-types";

const registerreq_FN = () => {
  return { type: types.REGISTERREQ };
};
const registersucc_FN = (payload) => {
  return { type: types.REGISTERSUCCESS, payload };
};
const registererror_FN = () => {
  return { type: types.REGISTERERROR };
};

const loginreq_FN = () => {
  return { type: types.LOGINREQ };
};

const loginsuccess_FN = (payload) => {
  return { type: types.LOGINSUCCES, payload };
};
const loginerror_FN = (payload) => {
  return { type: types.LOGINERROR, payload };
};

const logout_Fn=()=>{
  return {type:types.LOGOUT}
}


function loginFn(payload) {
  return (dispatch) => {
    dispatch(loginreq_FN());
    return axios
      .post("https://wide-eyed-tam-duck.cyclic.app/user/login", payload)
      .then((res) => {
        console.log(res.data, "action login");
        dispatch(loginsuccess_FN(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginerror_FN(error.response.data));
      });
  };
}

function registerFN(payload) {
  return (dispatch) => {
    dispatch(registerreq_FN());
    return axios
      .post("https://wide-eyed-tam-duck.cyclic.app/user/register", payload)
      .then((res) => {
        console.log(res.data, "action");
        dispatch(registersucc_FN(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(registererror_FN());
      });
  };
}

export { registerFN, loginFn ,logout_Fn };
