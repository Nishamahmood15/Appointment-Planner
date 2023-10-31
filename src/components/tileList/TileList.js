import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/contact/contact.actions";
export const TileList = ({ data }) => {
  const disptach = useDispatch();
  const {
    allcontacts: { contact },
  } = useSelector((state) => state.contact);
  useEffect(() => {
    disptach(getContacts());
  }, [disptach]);

  console.log(contact, "alll");
  return (
    <div class="tile-campo">
      {contact?.map(({ userName, phoneNumber, email }, index) => {
        return (
          <section>
            <div style={{ display: "flex", columnGap: 3 }}>
              <p style={{ fontWeight: "bold" }}>name:</p>
              <p key={index} className="title">
                {userName}
              </p>
            </div>
            <div style={{ display: "flex", columnGap: 3 }}>
              <p style={{ fontWeight: "bold" }}>phone Number:</p>
              <p>{phoneNumber}</p>
            </div>
            <div style={{ display: "flex", columnGap: 3 }}>
              <p style={{ fontWeight: "bold" }}>Email:</p>
              <p>{email}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};
