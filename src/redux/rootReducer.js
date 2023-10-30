import { combineReducers } from "@reduxjs/toolkit";
import contactSlicer from "./contact/contact.slicer";
import appointmentSlicer from "./appointment/appointment.slicer";

const rootReducer = combineReducers({
  contact: contactSlicer,
  appointment: appointmentSlicer,
});

export default rootReducer;
