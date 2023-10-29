import { createAsyncThunk } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import { createContactAPI, getContactsAPI } from "./api";

export const CreateContact = createAsyncThunk(
  "createContact/createContact",
  async (payload) => {
    const resultPromise = new Promise((resolve, reject) => {
      createContactAPI(payload)
        .then((res) => {
          resolve(res.data);
        })
        .catch(({ response }) => {
          reject(response.data?.error || "Something went wrong");
        });
    });

    toast.promise(resultPromise, {
      loading: "creating contact",
      success: "contact created Successfully",
      error: (err) => err,
    });

    return await resultPromise;
  }
);

//get contact
export const getContacts = createAsyncThunk("getContact/contacts", async () => {
  const res = await getContactsAPI();
  return res.data;
});
