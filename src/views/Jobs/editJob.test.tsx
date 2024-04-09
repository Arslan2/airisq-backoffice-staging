import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import EditJob from "./EditJob";

describe("Edit Job screen", () => {
  it("renders correctly", () => {
    const { getByText, getByTestId } = renderWithProviders(<EditJob />);

    expect(getByText("Edit Job")).toBeInTheDocument();
    expect(getByText(/Site Name/i)).toBeInTheDocument();
    expect(getByText(/Job Type/i)).toBeInTheDocument();
    expect(getByText("Assigned Engineer")).toBeInTheDocument();
    expect(getByText("Site Contact")).toBeInTheDocument();
    expect(getByText("Job Description")).toBeInTheDocument();
    expect(getByText("Document Upload")).toBeInTheDocument();
    // expect(getByText("Document Type")).toBeInTheDocument();

    expect(getByTestId("file-upload")).toBeInTheDocument();
  });
});
