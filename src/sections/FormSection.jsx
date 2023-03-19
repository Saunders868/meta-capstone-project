import React, { useReducer, useState } from "react";
import BaseForm from "../components/BaseForm";
import Title from "../components/Title";
import { v4 as uuidv4 } from 'uuid';

import "../styles/sections/form.css";
import ConfirmForm from "../components/ConfirmForm";
import ThankYou from "../components/ThankYou";
import { useFormik } from "formik";
import {
  firstValidationSchema,
  secondValidationSchema,
} from "../validationSchema";
import { REMOVE_TIME, SECOND_FORM_ADD } from "../actions";
import { formReducer, initializeTimes, updateTimes } from "../reducers";
import { initialState } from "../data";
import BookedSlot from "../components/BookedSlot";
import { submitAPI } from "../api";

const date = new Date();

const FormSection = () => {
  const [progress, setProgress] = useState("begin");
  // const [formResult, setFormResult] = useState(false);
  const [formData, setFormData] = useState({
    time: "",
    date: "",
    diners: 0,
    occasion: "",
    name: "",
    email: "",
    id: ''
  });
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    date,
    initializeTimes
  );

  const formik = useFormik({
    initialValues: {
      time: "",
      date: "",
      diners: "1",
      occasion: "birthday",
    },
    validationSchema: firstValidationSchema,
    onSubmit: (values) => {
      setProgress("confirm");
      // alert(JSON.stringify(values, null, 2));
      dispatchAvailableTimes({
        type: REMOVE_TIME,
        time: values.time,
      });
      // store form data from first form in local state
      setFormData({
        time: values.time,
        date: values.date,
        diners: parseInt(values.diners),
        occasion: values.occasion,
      });
      formik.resetForm();
    },
  });

  const formikSecond = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: secondValidationSchema,
    onSubmit: async (values) => {
      const result = await submitAPI(formData);
      if (result === true) {
        setProgress("complete");
        // alert(JSON.stringify(values, null, 2));
        // use local state form data to update reducer
        dispatch({
          type: SECOND_FORM_ADD,
          time: formData.time,
          date: formData.date,
          diners: formData.diners,
          occasion: formData.occasion,
          name: values.name,
          email: values.email,
          id: uuidv4(),
        });
        setFormData({
          ...formData,
          name: values.name,
          email: values.email,
          id: uuidv4(),
        });
        formikSecond.resetForm();
      }
    },
  });

  return (
    <section className="container" id="form">
      <div className="form-title">
        <Title title="Make Reservation" />
      </div>

      <div className="booked-slots container">
        <BookedSlot data={state} />
      </div>

      <div
        className={
          progress === "complete"
            ? "progress-indicator complete"
            : "progress-indicator"
        }
      >
        <div className="circle">
          <div className="inner-circle"></div>
        </div>
        <div className="line"></div>
        <div className="circle">
          {progress === "confirm" ? <div className="inner-circle"></div> : null}
          {progress === "complete" ? (
            <div className="inner-circle"></div>
          ) : null}
        </div>
        <div className="line"></div>
        <div className="circle">
          {progress === "complete" ? (
            <div className="inner-circle"></div>
          ) : null}
        </div>
      </div>

      {progress === "begin" ? (
        <BaseForm
          availableTimes={availableTimes}
          dispatchAvailableTimes={dispatchAvailableTimes}
          formik={formik}
        />
      ) : null}

      {progress === "confirm" ? (
        <ConfirmForm
          setProgress={setProgress}
          time={formData.time}
          dispatchAvailableTimes={dispatchAvailableTimes}
          dispatchUsers={dispatch}
          formik={formikSecond}
        />
      ) : null}

      {progress === "complete" ? (
        <ThankYou setProgress={setProgress} form={formData} />
      ) : null}
    </section>
  );
};

export default FormSection;
