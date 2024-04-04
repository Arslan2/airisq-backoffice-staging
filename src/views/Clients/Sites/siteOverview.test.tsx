import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "utils/testing";
import SiteOVerview from "./SiteOverview";
import SiteCard from "components/Jobs/SiteCard";

describe("Site overview screen", () => {
  it("renders correctly", () => {
    const { getByText, getByAltText } = renderWithProviders(
      <SiteOVerview />
    );

    expect(getByText("Site Overview")).toBeInTheDocument();
    expect(getByAltText("Site Image")).toBeInTheDocument();
    expect(getByText("Client Name")).toBeInTheDocument();
    expect(getByText("Address")).toBeInTheDocument();
    expect(getByText("Contact Number")).toBeInTheDocument();
    expect(getByText("General Email")).toBeInTheDocument();
    expect(getByText("Job Description")).toBeInTheDocument();
  });

  it("side card renders correctly", () => {
    const siteCardProps = {
      name: "XYZ Hospital Trust",
      location: "Gennersbury House, 1 Chapel Hill",
      badge: "Attention",
    };
    const { getByText } = renderWithProviders(
      <SiteCard details={siteCardProps} />
    );

    expect(getByText("Site")).toBeInTheDocument();
    expect(getByText(siteCardProps.name)).toBeInTheDocument();
    expect(getByText("Location")).toBeInTheDocument();
    expect(getByText(siteCardProps.location)).toBeInTheDocument();
    expect(getByText(siteCardProps.badge)).toBeInTheDocument();
  });
});
