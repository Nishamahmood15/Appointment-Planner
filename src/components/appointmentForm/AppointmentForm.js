import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import {
  Createappointment,
  getappointments,
} from "../../redux/appointment/appointment.actions";

export const AppointmentForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    title: " ",
    contact: " ",
    date: "",
    time: "",
  };

  const handleSubmit = (values) => {
    console.log("vvv", values);
    dispatch(Createappointment(values));
    setTimeout(() => {
      dispatch(getappointments());
    }, 3000);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              required
            />
          </div>

          <div>
            <label htmlFor="contact">Contact:</label>
            {/* render contactPicker with contact list */}
            <input
              type="text"
              name="contact"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contact}
              required
            />
          </div>

          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              required
            />
          </div>

          <div>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              name="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
              required
            />
          </div>

          <button type="submit">Add Appointment</button>
        </Form>
      )}
    </Formik>
  );
};
