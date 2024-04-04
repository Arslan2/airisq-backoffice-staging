/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import Login from ".";

describe("Login screen", () => {
  it("renders correctly", () => {
    const { getByText, getByAltText, getByRole, getByPlaceholderText } =
      renderWithProviders(<Login />);

    expect(getByAltText("App logo")).toBeInTheDocument();
    expect(getByRole("heading")).toHaveTextContent("Login To Your Account");
    expect(getByPlaceholderText("Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Password")).toBeInTheDocument();
    expect(getByRole("checkbox")).toBeInTheDocument();
    expect(getByText("Forgot Password?")).toBeInTheDocument();
    expect(getByRole("button", { name: "LOGIN" })).toBeInTheDocument();
  });
});
