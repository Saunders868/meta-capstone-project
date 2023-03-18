import React from "react";
import { BsFillCalendarFill, BsClockFill, BsPeopleFill } from "react-icons/bs";

const BookedSlot = ({ data }) => {
  if (data.length < 1) {
    return null;
  }
  return (
    <ul>
      {data.map((reservation) => (
        <li key={reservation.time}>
          <p className="section-title">{reservation.name}</p>
          <p className="content">
            {" "}
            <BsFillCalendarFill
              style={{
                marginRight: "5px",
              }}
            />{" "}
            {reservation.date}
          </p>
          <p className="content">
            <BsClockFill
              style={{
                marginRight: "5px",
              }}
            />{" "}
            {reservation.time}
          </p>
          <p className="content">
            {" "}
            <BsPeopleFill
              style={{
                marginRight: "5px",
              }}
            />{" "}
            {reservation.diners}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default BookedSlot;
