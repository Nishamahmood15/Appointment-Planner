import React from "react";
import Tile from "../tile/Tile";
export const TileList = ({ data }) => {
  return (
    <div>
      {/* mapping over the tile components objects */}
      {Data.map(({ title, phoneNunber, email, time }, index) => {
        return (
          <>
            <p key={index} className="title">
              {title}
            </p>
            <p>{phoneNunber}</p>
            <p>{email}</p>
            <p>{time}</p>
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
