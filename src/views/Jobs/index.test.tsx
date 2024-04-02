import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import Jobs from ".";

describe("Jobs", () => {
  it("render correctly", () => {
    const { getByText, getByRole, getByPlaceholderText } = renderWithProviders(
      <Jobs />
    );

    expect(getByText("Job List")).toBeInTheDocument();
    expect(getByText(/Jobs/i)).toBeInTheDocument();
    expect(getByText("Show Filters")).toBeInTheDocument();
    expect(getByRole("button", { name: /Add New Job +/i })).toBeInTheDocument();
    expect(getByRole("table")).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Badge/i })).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Job Type/i })
    ).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Client/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Site/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Status/i })).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Invoiced/i })
    ).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Report Completed/i })
    ).toBeInTheDocument();
    expect(getByPlaceholderText("Search")).toBeInTheDocument();
  });
});
