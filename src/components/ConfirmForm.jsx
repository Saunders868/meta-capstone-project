import React from "react";
import button from "../assets/backButton.png";
import Button from "./Button";
import "../styles/components/confirm-form.css";

const ConfirmForm = ({ setProgress, formik }) => {
  return (
    <>
      <div onClick={() => setProgress("begin")} className="back-button">
        <img src={button} alt="back button" />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="confirm-input-group">
          <label className="section-title" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="confirm-input-group">
          <label className="section-title" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="form-button confirm-form-buttons">
          <Button text="Confirm Reservation" />
          <Button
            text="Cancel Reservation"
            inverse
            onClick={() => setProgress("begin")}
          />
        </div>
      </form>
    </>
  );
};

export default ConfirmForm;
