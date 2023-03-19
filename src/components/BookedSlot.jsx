import React from "react";
import { BsFillCalendarFill, BsClockFill, BsPeopleFill } from "react-icons/bs";
import { IoIosWine } from "react-icons/io";

const BookedSlot = ({ data }) => {
  if (data.length < 1) {
    return null;
  }
  return (
    <ul>
      {data.map((reservation) => (
        <li key={reservation.id}>
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
          <p
            style={{
              textTransform: "capitalize",
            }}
            className="content"
          >
            {" "}
            <IoIosWine
              style={{
                marginRight: "5px",
              }}
            />{" "}
            {reservation.occasion}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default BookedSlot;
