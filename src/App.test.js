import { render, screen } from "@testing-library/react";
import Reservation from "./screens/Reservation";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeTimes, updateTimes } from "./reducers";
import { availableTimesInitialState } from "./data";
import { TIME } from "./actions";

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
  it("checking the initializeTimes function", () => {
    const times = initializeTimes(availableTimesInitialState);

    expect(times).toBe(availableTimesInitialState);
  });

  it("checking the updateTimes function", () => {
    const times = initializeTimes(availableTimesInitialState);
    const state = updateTimes(times, { type: TIME });

    expect(times).toBe(state);
  });
});
