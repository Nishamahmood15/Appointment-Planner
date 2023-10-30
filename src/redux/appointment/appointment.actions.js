import { createAsyncThunk } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import { createappointmentAPI, getAppointmentsAPI } from "./api";

export const Createappointment = createAsyncThunk(
  "createappointment/createappointment",
  async (payload) => {
    const resultPromise = new Promise((resolve, reject) => {
      createappointmentAPI(payload)
        .then((res) => {
          resolve(res.data);
        })
        .catch(({ response }) => {
          reject(response.data?.error || "Something went wrong");
        });
    });

    toast.promise(resultPromise, {
      loading: "creating appointment",
      success: "appointment created Successfully",
      error: (err) => err,
    });

    return await resultPromise;
  }
);

//get appointment
export const getappointments = createAsyncThunk(
  "getappointment/appointments",
  async () => {
    const res = await getAppointmentsAPI();
    return res.data;
  }
);
