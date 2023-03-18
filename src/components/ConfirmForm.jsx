import React from "react";
import button from "../assets/backButton.png";
import Button from "./Button";
import "../styles/components/confirm-form.css";
import { ADD_TIME, SECOND_FORM_REMOVE } from "../actions";

const ConfirmForm = ({ setProgress, formik, time, dispatchAvailableTimes, dispatchUsers }) => {

  const handleCancel = () => {
    setProgress('begin');
    dispatchAvailableTimes({
      type: ADD_TIME,
      time: time
    })
    dispatchUsers({
      type: SECOND_FORM_REMOVE,
      time: time
    })

  }
  return (
    <>
      <div
        onClick={handleCancel}
        style={{
          cursor: "pointer",
        }}
        className="back-button"
      >
        <img src={button} alt="back button" />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="confirm-input-group">
          <label
            aria-label="give us the name for the reservation"
            className="section-title"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            aria-describedby="name"
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="confirm-input-group">
          <label
            aria-label="give us the email for the reservation"
            className="section-title"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            aria-describedby="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="form-button confirm-form-buttons">
          <Button
            ariaLabel="Confirm your Reservation"
            text="Confirm Reservation"
          />
          <Button
            ariaLabel="Cancel your reservation"
            text="Cancel Reservation"
            inverse
            onClick={handleCancel}
          />
        </div>
      </form>
    </>
  );
};

export default ConfirmForm;
