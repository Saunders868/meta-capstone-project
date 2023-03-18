import React, { useReducer, useState } from "react";
import BaseForm from "../components/BaseForm";
import Title from "../components/Title";

import "../styles/sections/form.css";
import ConfirmForm from "../components/ConfirmForm";
import ThankYou from "../components/ThankYou";
import { useFormik } from "formik";
import {
  firstValidationSchema,
  secondValidationSchema,
} from "../validationSchema";
import { FIRST_FORM, SECOND_FORM } from "../actions";
import { formReducer, initializeTimes, updateTimes } from "../reducers";
import { availableTimesInitialState, initialState } from "../data";

const FormSection = () => {
  const [progress, setProgress] = useState("begin");
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, availableTimesInitialState, initializeTimes);

  const formik = useFormik({
    initialValues: {
      time: "17:00",
      date: "",
      diners: "1",
      occasion: "birthday",
    },
    validationSchema: firstValidationSchema,
    onSubmit: (values) => {
      setProgress("confirm");
      // alert(JSON.stringify(values, null, 2));
      dispatch({
        type: FIRST_FORM,
        time: values.time,
        date: values.date,
        diners: parseInt(values.diners),
        occasion: values.occasion,
      })
      formik.resetForm()
    },
  });

  const formikSecond = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: secondValidationSchema,
    onSubmit: (values) => {
      setProgress("complete");
      // alert(JSON.stringify(values, null, 2));
      dispatch({
        type: SECOND_FORM,
        time: state.time,
        date: state.date,
        diners: state.diners,
        occasion: state.occasion,
        name: values.name,
        email: values.email,
      })
      formikSecond.resetForm()
    },
  });

  return (
    <section className="container" id="form">
      <div className="form-title">
        <Title title="Make Reservation" />
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

      {progress === "begin" ? <BaseForm availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} formik={formik} /> : null}

      {progress === "confirm" ? (
        <ConfirmForm setProgress={setProgress} formik={formikSecond} />
      ) : null}

      {progress === "complete" ? (
        <ThankYou setProgress={setProgress} form={state} />
      ) : null}
    </section>
  );
};

export default FormSection;
