import { combineReducers } from "redux";
import watson from "./watson";
import lang from "./lang";
import userMsg from "./usrMsg";

const allReducers = combineReducers({ 
  watson : watson,
  lang : lang,
  usermsg : userMsg
});

export default allReducers