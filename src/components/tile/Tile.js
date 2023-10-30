import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getappointments } from "../../redux/appointment/appointment.actions";
export const Tile = () => {
  const disptach = useDispatch();
  const {
    allappointment: { appointmentData },
  } = useSelector((state) => state.appointment);
  useEffect(() => {
    disptach(getappointments());
  }, [disptach]);

  console.log(appointmentData, "alllapo");
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        rowGap: 40,
      }}
    >
      {appointmentData?.map(({ title, contact, date, time }, index) => {
        return (
          <section>
            <div style={{ display: "flex", columnGap: 3 }}>
              <p style={{ fontWeight: "bold" }}>name:</p>
              <p key={index} className="title">
                {title}
              </p>
            </div>
            <div style={{ display: "flex", columnGap: 3 }}>
              <p style={{ fontWeight: "bold" }}>phone Number:</p>
              <p>{contact}</p>
            </div>
            <div style={{ display: "flex", columnGap: 3 }}>
              <p style={{ fontWeight: "bold" }}>Date:</p>
              <p>{date}</p>
            </div>
            <div style={{ display: "flex", columnGap: 3 }}>
              <p style={{ fontWeight: "bold" }}>Time:</p>
              <p>{time}</p>
            </div>
          </section>
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
