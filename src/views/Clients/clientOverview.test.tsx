import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import ClientOverview from "./ClientOverview";

describe("Client Overview screen", () => {
  it("renders correctly", () => {
    const { getByText, getByRole } = renderWithProviders(<ClientOverview />);

    expect(getByText(/Client Overview/i)).toBeInTheDocument();
    expect(getByText(/Client Name/i)).toBeInTheDocument();
    expect(getByText(/Contact Number/i)).toBeInTheDocument();
    expect(getByText(/General Email/i)).toBeInTheDocument();

    expect(
      getByRole("button", { name: "add-new-contact-btn" })
    ).toBeInTheDocument();
  });
});
