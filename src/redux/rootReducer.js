import { combineReducers } from "@reduxjs/toolkit";
import contactSlicer from "./contact/contact.slicer";

const rootReducer = combineReducers({
  contact: contactSlicer,
});

export default rootReducer;
