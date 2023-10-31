import React from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

import Tile from "../../components/tile/Tile";

export const AppointmentsPage = () => {
  /* Define state variables for appointment info*/

  // const dispatch = useDispatch();

  return (
    <div>
      <section>
        <h2
        style={{
          fontWeight: 1000,
          textDecoration: "none",
          color: "Black",
          padding: "30px 0px",
          display: "flex",
          justifyContent: "center",
        }}>Add Appointment</h2>
        {/* Rendering appointmentform with props */}
        <AppointmentForm />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {/* rendering tilelist components appointment object*/}
        <Tile />
      </section>
    </div>
  );
};
