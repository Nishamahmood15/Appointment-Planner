import axios from 'axios';
import {axiosInstance} from './axios';
import {AppointmentApi} from './endPoints';

export const getAppointments = async () => {
    try {
        console.log("workinggggg");
      const response = await axios.get("http://localhost:8000/api/appointment/get-all")
      console.log(response.data,"DATDATA");
      return response;
    } catch (error) {
        console.log(error,"SADASDAS");
    //   throw error;
    }
  };