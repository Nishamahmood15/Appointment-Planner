import * as actionTypes from '../action/actionTypes';

const initialState = {
  appointments: [],
  loading: false,
  error: null,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_APPOINTMENTS_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_APPOINTMENTS_SUCCESS:
      return { ...state, loading: false, appointments: action.payload };
    case actionTypes.FETCH_APPOINTMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default appointmentReducer;