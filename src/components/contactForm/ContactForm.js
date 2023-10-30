// ContactForm.jsx

import React from "react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { CreateContact, getContacts } from "../../redux/contact/contact.actions";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    userName: "",
    phoneNumber: "",
    email: "",
  };

  const handleSubmit = (values) => {
    console.log("vvv", values);
    dispatch(CreateContact(values));
    setTimeout(() => {
      dispatch(getContacts());
    }, 3000);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form className="contact-form"> 
          <div className="form-group">
            <label htmlFor="userName">Contact Name:</label>
            <input
              name="userName"
              type="text"
              required
              placeholder="Contact Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              className="form-input" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              name="phoneNumber"
              type="tel"
              required
              placeholder="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className="form-input" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="form-input" 
            />
          </div>

          <button type="submit" className="submit-button bg-blue-900"> Add Contact</button> 
        </Form>
      )}
    </Formik>
  );
};
