import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" required />
      </div>

      <div>
        <label htmlFor="contact">Contact:</label>
        {/* render contactPicker with contact list */}
        <ContactPicker />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" required />
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" required />
      </div>

      <button type="submit">Add Appointment</button>
    </form>
  );
};
