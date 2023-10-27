import * as actionTypes from './actionTypes';
import * as api from '../../services/apiMethods';

export const fetchAppointmentsRequest = () => ({
  type: actionTypes.FETCH_APPOINTMENTS_REQUEST,
});

export const fetchAppointmentsSuccess = (appointments) => ({
  type: actionTypes.FETCH_APPOINTMENTS_SUCCESS,
  payload: appointments,
});

export const fetchAppointmentsFailure = (error) => ({
  type: actionTypes.FETCH_APPOINTMENTS_FAILURE,
  payload: error,
});

export const fetchAppointments = () => {
return async (dispatch)=>{
    dispatch(fetchAppointmentsRequest());
    try {
        console.log("inside the method");
        const appointments = await api.getAppointments();
        console.log(appointments, "appointments");
        dispatch(fetchAppointmentsSuccess(appointments));
      } catch (error) {
        console.log(error, "error");
        dispatch(fetchAppointmentsFailure(error));
      }
}
};