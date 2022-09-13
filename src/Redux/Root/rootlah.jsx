import { combineReducers, createStore } from "redux";

import IniSireducer from "./../Reducer/IniSireducer";
import VotingReducer from "../Reducer/Votingreducer";

const rootReducer = combineReducers({
  IniSireducer,
  VotingReducer,
});

const store = createStore(rootReducer);

export default store;
