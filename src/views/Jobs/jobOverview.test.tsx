import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import JobOverview from "./JobOverview";

describe("Job Overview", () => {
  it("renders correctly", () => {
    const { getByText, getAllByText, getByRole } = renderWithProviders(
      <JobOverview />
    );

    expect(getByText("Job Overview")).toBeInTheDocument();
    expect(getAllByText("Job Description")).toHaveLength(2);
    expect(getAllByText("Job Description")[0]).toBeInTheDocument();
    expect(getAllByText("Job Description")[1]).toBeInTheDocument();
    expect(getByText("Reports")).toBeInTheDocument();
    expect(getAllByText("Documents")).toHaveLength(2);
    expect(getAllByText("Documents")[0]).toBeInTheDocument();
    expect(getAllByText("Documents")[1]).toBeInTheDocument();
    expect(getAllByText("Sites")).toHaveLength(2);
    expect(getAllByText("Sites")[0]).toBeInTheDocument();
    expect(getAllByText("Sites")[1]).toBeInTheDocument();

    expect(
      getByRole("button", { name: "add-new-contact-btn" })
    ).toBeInTheDocument();
  });
});
