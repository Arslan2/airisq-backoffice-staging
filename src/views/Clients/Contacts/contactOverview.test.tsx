import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import ContactOverview from "./ContactOverview";

describe("Contact Overview", () => {
  it("renders correctly", () => {
    const { getByText, getAllByText, getByRole, getByTestId } =
      renderWithProviders(<ContactOverview />);

    expect(getByText("Contact Information")).toBeInTheDocument();
    expect(getByTestId("contactName")).toBeInTheDocument();
    expect(getByTestId("contactName")).toHaveTextContent("Name");
    expect(getByText("Address")).toBeInTheDocument();
    expect(getByText("Contact Number")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByRole("button", { name: "add-new-contact-btn" }));
    expect(getAllByText("Reports")).toHaveLength(2);

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
  });
});
