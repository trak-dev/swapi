import { combineReducers } from "redux";
import swapidata from "./swapi";
import moredata from "./more";
export const reducers = combineReducers({ swapidata, moredata });
