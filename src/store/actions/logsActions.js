// import axios from "axios";
import * as types from "./actionTypes";

export const fetchStart = () => {
  return {
    type: types.FETCH_LOGS_START
  };
};

export const fetchSuccess = response => {
  return {
    type: types.FETCH_LOGS_SUCCESS,
    res: response.data
  };
};

export const fetchFail = error => {
  return {
    type: types.FETCH_LOGS_FAIL,
    error: error
  };
};

export const fetchLogs = socket => dispatch => {
  return dispatch => {
    dispatch(fetchStart());
    socket.on("logs", res => {
      dispatch(fetchSuccess(res));
    });
  };
};

//
// export const initialize = () => {
//   return {
//     type: actionTypes.INITIALIZE
//   };
// };
//
// export const send = data => {
//   return dispatch => {
//     dispatch(sendStart());
//     axios
//       .post(`${config.apiUri}/orders`, data)
//       .then(response => {
//         dispatch(sendSuccess(response));
//       })
//       .catch(err => {
//         // console.log(err);
//         dispatch(sendFail(err));
//       });
//   };
// };
