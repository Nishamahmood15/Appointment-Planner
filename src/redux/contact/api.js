import { mainbaseURL } from "../../config";

export const getContactsAPI = async () => {
  const res = await mainbaseURL.get("/contact/get-all");
  return res;
};
// Create contact api
export const createContactAPI = async (payload) => {
  return mainbaseURL.post("/categories/create", payload);
};
