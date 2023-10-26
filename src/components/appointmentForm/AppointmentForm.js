import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
      </div>

      <div>
        <label htmlFor="contact">Contact:</label>
        {/* render contactPicker with contact list */}
        <ContactPicker 
        contacts={contacts}
        value={contact}
        onChange={(selectedContact)=> setContact(selectedContact)}/>
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e)=> setDate(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" value={time} onChange={(e)=> setTime(e.target.value)} required />
      </div>

      <button type="submit">Add Appointment</button>
    </form>
  );
};
