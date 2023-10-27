import React from "react";

export const ContactForm = () => {
  return (
    <>
      <form>
        <label>
          <input name="name" type="text" required placeholder="Contact Name" />
        </label>
        <br />

        <label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone Number"
            pattern="^07([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$"
          />
        </label>
        <br />

        <label>
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
          />
        </label>
        <br />

        <input type="submit" value="Add Contact" />
      </form>
    </>
  );
};
