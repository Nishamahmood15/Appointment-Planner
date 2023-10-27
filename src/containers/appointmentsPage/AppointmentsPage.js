import React, { useEffect, useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { fetchAppointments } from "../../redux/action/appointmentActions";
import { useDispatch } from "react-redux";
import store from "../../redux/store";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /* Define state variables for appointment info*/
const [title, setTitle]= useState("");
const [contact, setContact] = useState("");
const [date, setDate] = useState("");
const [time, setTime] = useState("");
// const dispatch = useDispatch();
useEffect(() => {
  store.dispatch(fetchAppointments())
  // dispatch(fetchAppointments());
}, []);


  const handleSubmit = (e) => {
    e.preventDefault();
  // Add appointement information
   addAppointment(title,contact,date,time);
  // Clear form data by resetting the state variables
   setTitle("");
   setContact("");
   setDate("");
   setTime("");
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {/* Rendering appointmentform with props */}
        <AppointmentForm 
        title={title}
        setTitle={setTitle}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
        />   
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {/* rendering tilelist components appointment object*/}
        <TileList data={appointments} />
      </section>
    </div>
  );
};