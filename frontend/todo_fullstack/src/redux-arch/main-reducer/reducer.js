import { Toggle_Fn } from "./action";
import * as types from "./action-type";

const initstate = {
  isloading: false,
  isError: false,
  data: [] || [],
};

const reducer = (state = initstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GETREQ:
      return { ...state, isloading: true, data: [] };

    case types.GETDATAREQSUCCESS:
      return { ...state, isloading: false, data: payload };

    case types.GETDATAREQERROR:
      return { ...state, isloading: false, isError: true, data: [] };

    case types.SUBMITREQ:
      return { ...state, isloading: true, data: [] };
    case types.SUBMITSUCCESS:
      return {
        ...state,
        isloading: false,
        data: [...state?.data, payload],
      };

    case types.SUBMITERROR:
      return { ...state, isloading: false, isError: true };

    case types.EDITREQ:
      return { ...state, isloading: true, data: [] };
    case types.EDITREQSUCC:
      let new_todo = state.data.filter((elm) => elm._id !== payload._id);

      new_todo = [...new_todo, payload];

      return { ...state, isloading: false, data: new_todo };

    case types.EDITREQFAIL:
      return { ...state, isloading: false, isError: true };

    case types.TOGGLEREQ:
      return { isloading: true, data: state.data };

    case types.TOGGLE:
      let new_data = state.data.filter((elm) => elm._id !== payload._id);
      new_data = [...new_data, payload];

      return { ...state, isloading: false, data: new_data };

    case types.DELSUC:
      return { ...state, isloading: true };

    case types.DELETEreq:
      let newdel = state.data.filter((elm) => elm._id !== payload._id);

      return { ...state, isloading: false, data: newdel };

    default:
      return state;
  }
};

export { reducer };
