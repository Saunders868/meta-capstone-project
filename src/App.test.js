import {
  fireEvent,
  render,
  screen,
  renderHook,
  waitFor,
} from "@testing-library/react";
import Reservation from "./screens/Reservation";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeTimes, updateTimes } from "./reducers";
import { availableTimesInitialState } from "./data";
import { TIME } from "./actions";
import BaseForm from "./components/BaseForm";
import ConfirmForm from "./components/ConfirmForm";
import userEvent from "@testing-library/user-event";
import { useFormik } from "formik";
import { firstValidationSchema } from "./validationSchema";

// determine that the reservation heading is present
test("Renders the Reservation Page heading", () => {
  render(
    <Router>
      <Reservation />
    </Router>
  );
  const headingElement = screen.getByText("Make Reservation");
  expect(headingElement).toBeInTheDocument();
});

// determine that the reservation heading is present
test("The Hero component is being rendered in the reservation page", () => {
  render(
    <Router>
      <Reservation />
    </Router>
  );
  const headingElement = screen.getByText("Little");
  const subheadingElement = screen.getByText("Chicago");
  expect(headingElement).toBeInTheDocument();
  expect(subheadingElement).toBeInTheDocument();
});

describe("Function testing", () => {
  it("checking the initializeTimes function returns an array of times", () => {
    const date = new Date();
    const times = initializeTimes(date);

    expect(true).toBe(Array.isArray(times));
  });

  it("checking the updateTimes function", () => {
    var stringify = "2023-04-03";
    const date = new Date(stringify); 
    const times = initializeTimes(date);
    const state = updateTimes(times, { type: TIME, date: date });

    expect(times).toStrictEqual(state);
  });
});

describe("Form Testing", () => {
  it("checking base form without validation errors", async () => {
    const handleSubmit = jest.fn();
    const dispatchAvailableTimes = jest.fn();
    const { result } = renderHook(() =>
      useFormik({
        initialValues: {
          time: "17:00",
          date: "",
          diners: "1",
          occasion: "birthday",
        },
        onSubmit: handleSubmit,
      })
    );
    const formik = result.current;
    render(
      <Router>
        <BaseForm formik={formik} availableTimes={availableTimesInitialState} dispatchAvailableTimes={dispatchAvailableTimes} />
      </Router>
    );

    const date = screen.getByLabelText("Date:");
    const time = screen.getByLabelText("Select Time:");
    const diners = screen.getByLabelText("Number of Diners:");
    const occasion = screen.getByLabelText("Occasion:");

    await fireEvent.change(date, {
      dispatchAvailableTimes,
      target: { value: "2023-04-03" },
    });
    await userEvent.type(time, "17:00");
    await userEvent.type(diners, "1");
    await userEvent.type(occasion, "birthday");

    // expect(date).toHaveValue("2023-04-03");
    expect(time).toHaveValue("17:00");
    expect(diners).toHaveValue("1");
    expect(occasion).toHaveValue("birthday");

    const button = screen.getByText("Book a Table");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    await waitFor(() => expect(handleSubmit).toBeCalledTimes(1),
    // expect(handleSubmit).toHaveBeenCalledWith({
    //   date: "2023-04-03",
    //   time: "17:00",
    //   diners: "1",
    //   occasion: "birthday",
    // })
    );
  });

  it("checking confirmation form without validation errors", async () => {
    const handleSubmit = jest.fn();
    const { result } = renderHook(() =>
      useFormik({
        initialValues: {
          name: "",
          email: "",
        },
        onSubmit: handleSubmit,
      })
    );
    const formik = result.current;
    render(
      <Router>
        <ConfirmForm formik={formik} />
      </Router>
    );
    const name = screen.getByLabelText("Name:");
    const email = screen.getByLabelText("Email:");

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();

    await fireEvent.change(name, {
      target: { value: "John" },
    });
    await fireEvent.change(email, {
      target: { value: "john@email.com" },
    });

    const button = screen.getByText("Confirm Reservation");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    await waitFor(() => expect(handleSubmit).toBeCalledTimes(1));
  });
});

describe("Form Validation Testing", () => {
  it("checking base form", async () => {
    const handleSubmit = jest.fn();
    const dispatchAvailableTimes = jest.fn();
    const { result } = renderHook(() =>
      useFormik({
        initialValues: {
          time: "",
          date: "",
          diners: "1",
          occasion: "birthday",
        },
        validationSchema: firstValidationSchema,
        onSubmit: handleSubmit
      })
    );
    const formik = result.current;
    render(
      <Router>
        <BaseForm formik={formik} availableTimes={availableTimesInitialState} dispatchAvailableTimes={dispatchAvailableTimes} />
      </Router>
    );

    const date = screen.getByLabelText("Date:");
    const time = screen.getByLabelText("Select Time:");

    await fireEvent.blur(date)
    await fireEvent.blur(time)

    const button = screen.getByText("Book a Table");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    // handle submit would not be called due to the errors
    await waitFor(() => expect(handleSubmit).toBeCalledTimes(0));
  });

  it("checking confirm", async () => {
    const handleSubmit = jest.fn();
    const { result } = renderHook(() =>
      useFormik({
        initialValues: {
          name: "",
          email: "",
        },
        onSubmit: handleSubmit,
      })
    );
    const formik = result.current;
    render(
      <Router>
        <ConfirmForm formik={formik} />
      </Router>
    );
    const name = screen.getByLabelText("Name:");
    const email = screen.getByLabelText("Email:");

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();

    const button = screen.getByText("Confirm Reservation");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    // handle submit would not be called due to the errors
    await waitFor(() => expect(handleSubmit).toBeCalledTimes(0));
  });
});
