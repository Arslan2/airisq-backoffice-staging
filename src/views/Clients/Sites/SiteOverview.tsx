import SiteCard from "components/Jobs/SiteCard";
import SitesOverviewCard from "components/Sites/SitesOverviewCard";
import { useSidebarOptions } from "components/common/Layout";
import React, { useEffect } from "react";
import JobDescriptionIcon from "../../../assets/img/jobDescriptionIcon.png";
import UserIcon from "../../../assets/img/userIcon.png";
import { Link } from "react-router-dom";

const SiteOVerview = () => {
  const { setSidebarOptions } = useSidebarOptions();

  const sites = new Array(12).fill({
    name: "XYZ Hospital Trust",
    location: "Gennersbury House, 1 Chapel Hill",
    badge: "Attention",
  });

  useEffect(() => {
    setSidebarOptions((prevObject) => {
      let updatedObject = {};
      updatedObject["sites"] = true;

      Object.keys(prevObject).map((key) => {
        if (key !== "sites") {
          updatedObject[key] = false;
        }
      });

      return updatedObject;
    });
  }, []);

  return (
    <div className="py-6 px-8 bg-alice-blue-50 flex-1 overflow-y-auto">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3">
          <div className="text-poster-blue text-lg">Site Overview</div>
          <div className="flex items-center mb-3 mt-10">
            <img src={UserIcon} alt="icon" />
            <span className="text-poster-blue text-sm ml-2">
              Contact Information
            </span>
          </div>
          <SitesOverviewCard />
        </div>
        <div className="col-span-9">
          <div className="mt-16">
            <div className="flex items-center mb-3">
              <img src={JobDescriptionIcon} alt="icon" />
              <span className="text-poster-blue text-sm ml-2">
                Job Description
              </span>
            </div>
            <div className="grid grid-cols-12 gap-3 text-poster-blue">
              {sites.map((site, index) => (
                <div className="col-span-3" key={index}>
                  <Link to="/client-list/sites/overview/1/details">
                    <SiteCard details={site} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteOVerview;
