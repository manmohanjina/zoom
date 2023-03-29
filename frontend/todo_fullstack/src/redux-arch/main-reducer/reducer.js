import * as types from "./action-type";

const initstate = {
  isloading: false,
  isError: false,
  data: [],
};

const reducer = (state = initstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GETREQ:
      return { ...state, isloading: true };

    case types.GETDATAREQSUCCESS:
      return { ...state, isloading: false, data: payload };

    case types.GETDATAREQERROR:
      return { ...state, isloading: false, isError: true };

    case types.SUBMITREQ:
      return { ...state, isloading: true };
    case types.SUBMITSUCCESS:
      console.log(payload, "red");

      return { ...state, isloading: false, data:[...state.data,payload]};

    case types.SUBMITERROR:
      return { ...state, isloading: false, isError: true };

    default:
      return state;
  }
};

export { reducer };
