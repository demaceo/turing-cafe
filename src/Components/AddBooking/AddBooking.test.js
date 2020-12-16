import React from "react";
import AddBooking from "./AddBooking";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";


describe("Add Booking", () => {
  it("should render a form with inputs", () => {
    render(<AddBooking />);
    const nameInput = screen.getByAltText('name');
    const dateInput = screen.getByAltText("date");
    const timeInput = screen.getByAltText("time");
    const numberInput = screen.getByAltText("number");
    const submitButton= screen.getByText("Make Reservation");

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
it("should set the input value of entered data", () => {
  render(<AddBooking />)
  const nameInput = screen.getByAltText("name");
  userEvent.type(screen.getByAltText("name"), 'SpiderMan')
  expect(nameInput).toHaveValue("SpiderMan");
});

});
