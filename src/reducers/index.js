import { combineReducers } from "redux";
import watson from "./watson";
import lang from "./lang";

const allReducers = combineReducers({ 
  watson : watson,
  lang : lang
});

export default allReducers