import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>

        <label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Contact Name"
          />
        </label>
        <br />

        <label>
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
          />
        </label>
        <br />

        <input
          type="submit"
          value="Add Contact"
        />
      </form>
    </>
  );
};

