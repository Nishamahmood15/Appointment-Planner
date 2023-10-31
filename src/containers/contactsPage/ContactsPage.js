import React from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = () => {
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
        }}>Add Contact</h2>

        <ContactForm />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList />
      </section>
    </div>
  );
};
