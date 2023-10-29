import React, { useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!duplicate) {
  //     addContact(name, phone, email);
  //     setName("");
  //     setPhone("");
  //     setEmail("");
  //   }
  // };

  // useEffect(() => {
  //   const nameIsDuplicate = () => {
  //     const nameFound = contacts.find((contact) => contact.name === name);
  //     if (nameFound !== undefined) {
  //       return true;
  //     }
  //     return false;
  //   };

  //   if (nameIsDuplicate()) {
  //     setDuplicate(true);
  //   } else {
  //     setDuplicate(false);
  //   }
  // }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>
          Add Contact {duplicate ? " - This contact name already exists" : ""}
        </h2>

        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          // handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList />
      </section>
    </div>
  );
};
