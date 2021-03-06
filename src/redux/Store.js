import Reducer from "./Reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const Store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
