import { combineReducers, createStore } from "redux";

import IniSireducer from "./../Reducer/IniSireducer";

const rootReducer = combineReducers({
  IniSireducer,
});

const store = createStore(rootReducer);

export default store;
