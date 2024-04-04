import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import Contacts from ".";

describe("Contact list", () => {
  it("renders correctly", () => {
    const { getByText, getByRole } = renderWithProviders(<Contacts />);

    expect(getByText("Contact List")).toBeInTheDocument();
    expect(getByText("Show Filters")).toBeInTheDocument();
    expect(
      getByRole("button", { name: /Add New Contact +/i })
    ).toBeInTheDocument();
    expect(getByRole("table")).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Badge/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Name/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Client/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Sites/i })).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Contact Number/i })
    ).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Attachment/i })
    ).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Actions/i })).toBeInTheDocument();
  });
});
