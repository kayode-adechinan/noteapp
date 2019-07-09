import { combineReducers } from "redux";
import notes from "./notes";
import auth from "./auth";

const noteApp = combineReducers({
  notes, auth
});




export default noteApp;
