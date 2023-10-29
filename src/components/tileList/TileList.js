import React, { useEffect } from "react";
import Tile from "../tile/Tile";
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
    <div className="flex gap-4">
      {/* mapping over the tile components objects */}
      {contact?.map(({ userName, phoneNumber, email }, index) => {
        return (
          <>
            <p key={index} className="title">
              {userName}
            </p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
          </>
        );
      })}
    </div>
  );
};
const Data = [
  {
    title: "herry",
    phoneNunber: "999999",
    date: "kingherry@gmail.com",
    time: "12:00 AM",
  },
  {
    title: "herry",
    phoneNunber: "999999",
    date: "kingherry@gmail.com",
    time: "12:00 AM",
  },
  {
    title: "herry",
    phoneNunber: "999999",
    date: "kingherry@gmail.com",
    time: "12:00 AM",
  },
  {
    title: "herry",
    phoneNunber: "999999",
    date: "kingherry@gmail.com",
    time: "12:00 AM",
  },
];
