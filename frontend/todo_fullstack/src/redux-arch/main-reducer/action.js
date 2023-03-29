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
        console.log(error);
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
        // console.log(result.success, "result of get");
        dispatch(getdatasucc_FN(result.success));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getdataerror_FN());
      });
  };
}

export { getTodoData, SubmitTodo };
