import * as types from "./action-types";

const intstate = {
  isloading: false,
  isError: false,
  success: false,
  isAdmin: false,
  res: "",
};

const reducer = (state = intstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTERREQ:
      return { ...state, isloading: true };
    case types.REGISTERSUCCESS:
      return { ...state, isloading: false, success: true, res: payload };
    case types.REGISTERERROR:
      return { ...state, isloading: false, success: false };

    case types.LOGINREQ:
      return { ...state, isloading: true };
    case types.LOGINSUCCES:
      
        return { ...state, isloading: false, success: true, res: payload ,isAdmin:payload.role==1?true:false };
    case types.LOGINERROR:
      return { ...state, isloading: false, success: false, isError: payload };

      case types.LOGOUT:return {...state, success:false, res:"",isAdmin:false,}
    default:
      return state;
  }
};

export { reducer };
