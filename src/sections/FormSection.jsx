import React, { useState } from "react";
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
import moment from "moment";
const date = new Date();

const initialState = {
  time: "17:00",
  date: `${moment(date).format("YYYY-MM-d")}`,
  diners: 1,
  occasion: "birthday",
  name: "",
  email: "",
};

const FormSection = () => {
  const [form, setForm] = useState(initialState);

  const formik = useFormik({
    initialValues: {
      time: "17:00",
      date: "",
      diners: 1,
      occasion: "birthday",
    },
    validationSchema: firstValidationSchema,
    onSubmit: (values) => {
      setProgress("confirm");
      alert(JSON.stringify(values, null, 2));
      setForm({
        ...form,
        time: values.time,
        date: values.date,
        diners: parseInt(values.diners),
        occasion: values.occasion,
      });
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
      alert(JSON.stringify(values, null, 2));
      setForm({
        ...form,
        name: values.name,
        email: values.email,
      });
    },
  });

  const [progress, setProgress] = useState("begin");

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

      {progress === "begin" ? <BaseForm formik={formik} /> : null}

      {progress === "confirm" ? (
        <ConfirmForm setProgress={setProgress} formik={formikSecond} />
      ) : null}

      {progress === "complete" ? (
        <ThankYou setProgress={setProgress} form={form} />
      ) : null}
    </section>
  );
};

export default FormSection;
