import { createSlice } from "@reduxjs/toolkit";
import { Createappointment, getappointments } from "./appointment.actions";

const initialState = {
  //add tags
  isappointmentCreateLoading: false,
  isappointmentCreateLoaded: false,
  isappointmentCreateLoadingFailed: false,

  /****************************/
  isgetappointmentoading: false,
  isgetappointmentoaded: false,
  isgetappointmentoadingFailed: false,
  allappointment: [],
};

const appointment = createSlice({
  name: "appointment",
  initialState,

  extraReducers: {
    [Createappointment.pending]: (state) => {
      state.areallFoodCategoryLoading = true;
    },
    [Createappointment.fulfilled]: (state, action) => {
      state.isappointmentCreateLoading = false;
      state.isappointmentCreateLoaded = true;
    },
    [Createappointment.rejected]: (state) => {
      state.isappointmentCreateLoading = false;
      state.isappointmentCreateLoadingFailed = true;
    },
    /*******************************************************/
    [getappointments.pending]: (state) => {
      state.isgetappointmentoading = true;
    },

    [getappointments.fulfilled]: (state, action) => {
      state.isgetappointmentoading = false;
      state.isappointmentCreateLoaded = true;
      state.allappointment = action.payload;
    },
    [getappointments.rejected]: (state) => {
      state.isgetappointmentoading = false;
      state.isgetappointmentoadingFailed = true;
    },
  },
});

export default appointment.reducer;
