import React from "react";
export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title"> conatacts</p>
      {/* conditional approach to check descrition avilable
      then maping over each item and listing values */}
      {Data.map(({ userName, phoneNunber, email }, index) => {
        return (
          <>
            <p key={index} className="title">
              {userName}
            </p>
            <p>{phoneNunber}</p>
            <p>{email}</p>
          </>
        );
      })}
    </div>
  );
};
export default Tile;

const Data = [
  { userName: "herry", phoneNunber: "999999", email: "kingherry@gmail.com" },
  { userName: "herry", phoneNunber: "999999", email: "kingherry@gmail.com" },
  { userName: "herry", phoneNunber: "999999", email: "kingherry@gmail.com" },
  { userName: "herry", phoneNunber: "999999", email: "kingherry@gmail.com" },
  { userName: "herry", phoneNunber: "999999", email: "kingherry@gmail.com" },
  { userName: "herry", phoneNunber: "999999", email: "kingherry@gmail.com" },
];
