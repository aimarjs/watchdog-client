import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import logsReducer from "./reducers/logsReducer";

const rootReducer = combineReducers({
  logs: logsReducer
});

let composeEnhancers = null;

if (process.env.NODE_ENV === "development") {
  composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
} else {
  composeEnhancers = applyMiddleware(thunk);
}

const store = createStore(rootReducer, composeEnhancers);

export default store;
