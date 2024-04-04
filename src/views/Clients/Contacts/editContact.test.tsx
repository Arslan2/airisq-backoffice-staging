import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import EditContacts from "./EditContacts";

describe("Edit Contact", () => {
  it("renders correctly", () => {
    const { getByText, getByRole } = renderWithProviders(<EditContacts />);

    expect(getByText("Edit Contact")).toBeInTheDocument();
    expect(getByText(/First Name/i)).toBeInTheDocument();
    expect(getByText(/Last Name/i)).toBeInTheDocument();
    expect(getByText(/Role/i)).toBeInTheDocument();
    expect(getByText(/Client/i)).toBeInTheDocument();
    expect(getByText(/Sites/i)).toBeInTheDocument();
    expect(getByText(/Contact Number/i)).toBeInTheDocument();
    expect(getByText(/Email/i)).toBeInTheDocument();
    expect(getByText(/Document Upload/i)).toBeInTheDocument();
    expect(getByText(/Document Type/i)).toBeInTheDocument();
    expect(getByText(/Mark Inactive/i)).toBeInTheDocument();

    expect(getByRole("button", { name: "upload-button" })).toBeInTheDocument();
  });
});
