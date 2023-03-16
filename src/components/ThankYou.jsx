import React from "react";
import "../styles/components/thank-you.css";
import Button from "./Button";

const ThankYou = ({ form, setProgress }) => {
  return (
    <div className="thanks">
      <h2 className="display-title">Thank You {form.name}</h2>
      <p className="lead-text">
        Your reservation has successfully been completed...!
      </p>

      <Button
        onClick={() => setProgress("begin")}
        text="Make another Reservation"
      />
    </div>
  );
};

export default ThankYou;
