import React from "react";
import Button from "./Button";

const BaseForm = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label className="section-title" htmlFor="date">
          Date:
        </label>
        <input
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
          name="date"
          id="date"
        />
        {formik.touched.date && formik.errors.date ? (
          <p className="error">{formik.errors.date}</p>
        ) : null}
      </div>
      <div className="form-group">
        <label className="section-title" htmlFor="time">
          Select Time:
        </label>
        <select
          id="time"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.time}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        {formik.touched.time && formik.errors.time ? (
          <p className="error">{formik.errors.time}</p>
        ) : null}
      </div>
      <div className="form-group">
        <label className="section-title" htmlFor="diners">
          Number of Diners:
        </label>
        <select
          name="diners"
          id="diners"
          className="content"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.diners}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        {formik.touched.diners && formik.errors.diners ? (
          <p className="error">{formik.errors.diners}</p>
        ) : null}
      </div>
      <div className="form-group">
        <label className="section-title" htmlFor="occasion">
          Occasion:
        </label>
        <select
          name="occasion"
          id="occasion"
          className="content"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.occasion}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <p className="error">{formik.errors.occasion}</p>
        ) : null}
      </div>

      <div className="form-button">
        <Button text="Book a Table" />
      </div>
    </form>
  );
};

export default BaseForm;
