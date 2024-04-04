import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import SiteOverviewDetail from "./SiteOverviewDetail";

describe("Site overview details", () => {
  it("renders correctly", () => {
    const { getByText, getAllByText, getByRole } = renderWithProviders(
      <SiteOverviewDetail />
    );

    expect(getByText("Contact Information")).toBeInTheDocument();
    expect(getByText("Client Name")).toBeInTheDocument();
    expect(getByText("Address")).toBeInTheDocument();
    expect(getAllByText("Contact Number")).toHaveLength(2);
    expect(getByText("General Email")).toBeInTheDocument();
    expect(getByText("Assigned Engineers")).toBeInTheDocument();
    expect(getByRole("button", { name: "add-new-contact-btn" }));
    expect(getByText("Reports")).toBeInTheDocument();

    expect(getByRole("columnheader", { name: /Badge/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Name/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Client/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Site/i })).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Contact Number/i })
    ).toBeInTheDocument();
    expect(
      getByRole("columnheader", { name: /Attachments/i })
    ).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /Actions/i })).toBeInTheDocument();
  });
});
