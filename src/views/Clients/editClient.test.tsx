import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import EditClient from "./EditClient";

describe("Edit client screen", () => {
  it("renders correctly", async () => {
    const { getByText, getByTestId } = renderWithProviders(<EditClient />);

    expect(getByText(/Edit Client/i)).toBeInTheDocument();
    expect(getByText(/Client Name/i)).toBeInTheDocument();
    expect(getByText(/Address 1/i)).toBeInTheDocument();
    expect(getByText(/Address 2/i)).toBeInTheDocument();
    expect(getByText(/Address 3/i)).toBeInTheDocument();
    expect(getByText(/City/i)).toBeInTheDocument();
    expect(getByText(/Post Code/i)).toBeInTheDocument();
    expect(getByText(/Contact Number/i)).toBeInTheDocument();
    expect(getByText(/General Email/i)).toBeInTheDocument();
    expect(getByText(/Primary Contact/i)).toBeInTheDocument();
    expect(getByText(/Document Upload/i)).toBeInTheDocument();
    // expect(getByText(/Document Type/i)).toBeInTheDocument();
    expect(getByText(/Mark Inactive/i)).toBeInTheDocument();

    expect(getByTestId("file-upload")).toBeInTheDocument();
  });
});
