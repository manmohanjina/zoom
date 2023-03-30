import axios from "axios";
import * as types from "./action-type";

const getdatareq_FN = () => {
  return { type: types.GETREQ };
};
const getdatasucc_FN = (payload) => {
  return { type: types.GETDATAREQSUCCESS, payload };
};
const getdataerror_FN = () => {
  return { type: types.GETDATAREQERROR };
};

const submittodoreq_FN = () => {
  return { type: types.SUBMITREQ };
};
const submittodosucc_FN = (payload) => {
  return { type: types.SUBMITSUCCESS, payload };
};
const submittodoerr_FN = () => {
  return { type: types.SUBMITERROR };
};

const editreq_FN = () => {
  return { type: types.EDITREQ };
};
const editreqsucc_FN = (payload) => {
  return { type: types.EDITREQSUCC, payload };
};
const editreqerr = () => {
  return { type: types.EDITREQFAIL };
};

const toggle_req_FN = () => {
  return { type: types.TOGGLEREQ };
};

const toggle_FN = (payload) => {
  return { type: types.TOGGLE, payload };
};

const del_FN = (payload) => {
  return { type: types.DELETEreq, payload };
};
const del_req_FN = () => {
  return { type: types.DELSUC };
};

function delFn(id) {
  return (dispatch) => {
    dispatch(del_req_FN());
    return axios
      .delete(`https://wide-eyed-tam-duck.cyclic.app/deltodo/${id}`)
      .then((res) => {
        dispatch(del_FN(res.data.finditem));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function Toggle_Fn(id) {
  return (dispatch) => {
    dispatch(toggle_req_FN());
    return fetch(`https://wide-eyed-tam-duck.cyclic.app/toggle/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result, "result");
        dispatch(toggle_FN(result));
      })
      .catch((error) => {
        console.log(error, "error in toggle action");
      });
  };
}

function edit_Fn(id, payload) {
  return (dispatch) => {
    dispatch(editreq_FN());
    return fetch(`https://wide-eyed-tam-duck.cyclic.app/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result, "check reduler");
        dispatch(editreqsucc_FN(result.new_todo));
      })
      .catch((error) => {
        console.log(error);
        dispatch(editreqerr());
      });
  };
}

function SubmitTodo(payload) {
  return (dispatch) => {
    dispatch(submittodoreq_FN());
    return fetch("https://wide-eyed-tam-duck.cyclic.app/addtodo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(submittodosucc_FN(result.new_todo));
      })
      .catch((error) => {
        console.log(error, "errireirj");
        dispatch(submittodoerr_FN());
      });
  };
}

function getTodoData() {
  return (dispatch) => {
    dispatch(getdatareq_FN());
    return fetch("https://wide-eyed-tam-duck.cyclic.app/singleuser", {
      headers: {
        "content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.success, "result of get");
        dispatch(getdatasucc_FN(result.success));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getdataerror_FN());
      });
  };
}

export { getTodoData, SubmitTodo, edit_Fn, Toggle_Fn, delFn };
