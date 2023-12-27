import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import TestReducer from "./redux/reducers/TestReducer";

const composeEnhancers = ( process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const store = createStore(combineReducers({TestReducer: TestReducer}), composeEnhancers(applyMiddleware()));

export default store;
