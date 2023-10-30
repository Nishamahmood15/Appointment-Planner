import { Form, Formik } from "formik";
import React from "react";
import {
  CreateContact,
  getContacts,
} from "../../redux/contact/contact.actions";
import { useDispatch } from "react-redux";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    userName: " ",
    phoneNumber: " ",
    email: "",
  };

  const handleSubmit = (values) => {
    console.log("vvv", values);
    dispatch(CreateContact(values));
    setTimeout(() => {
      // Make the API call or dispatch an action here
      dispatch(getContacts());
    }, 3000);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form>
          <div>
            <label>
              <input
                name="userName"
                type="text"
                required
                placeholder="Contact Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
              />
            </label>
            <br />

            <label>
              <input
                name="phoneNumber"
                type="tel"
                required
                placeholder="Phone Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
            </label>
            <br />

            <label>
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </label>
            <br />

            <button type="submit" className="bg-blue-900"> Add Contact</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
