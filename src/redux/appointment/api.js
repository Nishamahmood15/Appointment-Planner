import { mainbaseURL } from "../../config";

export const getAppointmentsAPI = async () => {
  const res = await mainbaseURL.get("/appointment/get-all");
  return res;
};
// Create appointment api
export const createappointmentAPI = async (payload) => {
  return mainbaseURL.post("/appointment/create", payload);
};
