import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import Sites from ".";

describe("Sites", () => {
  it("renders correctly", () => {
    const { getByRole, getByText, getByPlaceholderText } = renderWithProviders(
      <Sites />
    );

    expect(getByText("Site List")).toBeInTheDocument();
    expect(getByText("Show Filters")).toBeInTheDocument();
    expect(
      getByRole("button", { name: /Add New Site +/i })
    ).toBeInTheDocument();
    expect(getByRole("table")).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Badge/i })).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Site Name/i })
    ).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Client/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Address/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /City/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Reports/i })).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Attachments/i })
    ).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Actions/i })).toBeInTheDocument();
    expect(getByPlaceholderText("Search")).toBeInTheDocument();
  });
});
