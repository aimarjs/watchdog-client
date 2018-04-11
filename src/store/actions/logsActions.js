import axios from 'axios';
import * as types from './actionTypes';

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

export const fetchLogs = () => async dispatch => {
	dispatch(fetchStart());
	try {
		const res = await axios.get('http://localhost:5000/api/logs');
		dispatch(fetchSuccess(res));
	} catch (err) {
		dispatch(fetchFail(err));
	}
};

export const addNewLogEntry = data => {};
//
// export const fetchSomeOffers = () => async dispatch => {
// 	dispatch(fetchStart());
// 	try {
// 		const res = await axios.get(`https://www.domeca.ee/api/offers?show=3`);
// 		dispatch(fetchSuccess(res));
// 	} catch (error) {
// 		dispatch(fetchFail(error));
// 	}
// };

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
