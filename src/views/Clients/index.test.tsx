import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import Clients from ".";

describe("Client", () => {
  it("renders correctly", () => {
    const { getByRole, getByText, getByPlaceholderText } = renderWithProviders(
      <Clients />
    );

    expect(getByText("Dashboard")).toBeInTheDocument();
    expect(getByText("Client List")).toBeInTheDocument();
    expect(getByText("Show Filters")).toBeInTheDocument();
    expect(
      getByRole("button", { name: /Add New Client +/i })
    ).toBeInTheDocument();
    expect(getByRole("table")).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Badge/i })).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Client Name/i })
    ).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /City/i })).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Primary Contact/i })
    ).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Number of Sites/i })
    ).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Attachments/i })
    ).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Actions/i })).toBeInTheDocument();
    expect(getByPlaceholderText("Search")).toBeInTheDocument();
  });
});
