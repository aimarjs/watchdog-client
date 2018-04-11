import * as types from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  entries: null,
  loading: false,
  error: null,
  success: false
};

const fetchStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const fetchSuccess = (state, action) => {
  return updateObject(state, {
    entries: action.res,
    loading: false,
    success: true
  });
};

const fetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error.response.data,
    loading: false,
    success: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LOGS_START:
      return fetchStart(state, action);
    case types.FETCH_LOGS_SUCCESS:
      return fetchSuccess(state, action);
    case types.FETCH_LOGS_FAIL:
      return fetchFail(state, action);
    default:
      return state;
  }
};

export default reducer;
