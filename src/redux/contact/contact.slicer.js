import { createSlice } from "@reduxjs/toolkit";
import { CreateContact, getContacts } from "./contact.actions";

const initialState = {
  //add tags
  isContactCreateLoading: false,
  isContactCreateLoaded: false,
  isContactCreateLoadingFailed: false,

  /****************************/
  isgetcontactLoading: false,
  isgetcontactLoaded: false,
  isgetcontactLoadingFailed: false,
  allcontacts: [],
};

const contact = createSlice({
  name: "contact",
  initialState,

  extraReducers: {
    [CreateContact.pending]: (state) => {
      state.areallFoodCategoryLoading = true;
    },
    [CreateContact.fulfilled]: (state, action) => {
      state.isContactCreateLoading = false;
      state.isContactCreateLoaded = true;
    },
    [CreateContact.rejected]: (state) => {
      state.isContactCreateLoading = false;
      state.isContactCreateLoadingFailed = true;
    },
    /*******************************************************/
    [getContacts.pending]: (state) => {
      state.isgetcontactLoading = true;
    },

    [getContacts.fulfilled]: (state, action) => {
      state.isgetcontactLoading = false;
      state.isContactCreateLoaded = true;
      state.allcontacts = action.payload;
    },
    [getContacts.rejected]: (state) => {
      state.isgetcontactLoading = false;
      state.isgetcontactLoadingFailed = true;
    },
  },
});

export default contact.reducer;
