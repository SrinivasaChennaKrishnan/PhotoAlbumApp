import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../Reducers/RootReducer";

/** Application store created with redux-thunk */
export const store = createStore(RootReducer, applyMiddleware(thunk));
