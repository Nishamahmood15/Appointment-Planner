import { combineReducers } from 'redux';
import appointmentReducer from './appointmentReducer';

const rootReducer = combineReducers({
  appointments: appointmentReducer,
 
});

export default rootReducer;