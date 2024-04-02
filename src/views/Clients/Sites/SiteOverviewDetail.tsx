import JobOverviewAccordion from "components/Jobs/JobOverviewAccordion";
import JobOverviewCard from "components/Jobs/JobOverviewCard";
import { useSidebarOptions } from "components/common/Layout";
import React, { useEffect } from "react";
import PdfIcon from "../../../assets/img/pdfIcon.png";
import ReportsIcon from "../../../assets/img/reportsIcon.png";
import UserIcon from "../../../assets/img/userIcon.png";
import JobsIcon from "../../../assets/img/jobListIcon.png";
import ContactIcon from "../../../assets/img/clientIconLight.png";
import SchemanticsIcon from "../../../assets/img/schemanticsIcon.png";
import ContactsAccordion from "components/Sites/ContactsAccordion";

const SiteOverviewDetail = () => {
  const { setSidebarOptions } = useSidebarOptions();

  const documents = new Array(10).fill({
    name: "XYZ Hospital Trust.pdf",
    icon: PdfIcon,
    last_updated: "15.02.2024",
  });

  const sites = new Array(5).fill({
    name: "XYZ Hospital Trust",
    location: "Gennersbury House, 1 Chapel Hill",
    badge: "Attention",
  });

  useEffect(() => {
    setSidebarOptions({
      dashboard: false,
      client: false,
      sites: true,
      schedule: false,
      jobs: false,
      messaging: false,
      settings: false,
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
          <JobOverviewCard />
        </div>
        <div className="col-span-9">
          <div className="flex items-center gap-7 text-poster-blue text-lg">
            <span>Reports</span>
            <span>Contacts</span>
            <span>Documents</span>
            <span>Jobs</span>
            <span>Schematics</span>
          </div>
          <div className="mt-14">
            <div className="w-full p-2 rounded-lg text-poster-blue">
              <JobOverviewAccordion
                title={"Report"}
                icon={<img src={ReportsIcon} alt="Icon" />}
                data={documents}
              />
            </div>
            <div className="w-full p-2 rounded-lg text-poster-blue">
              <ContactsAccordion
                title={"Contacts"}
                icon={<img src={ContactIcon} alt="Icon" />}
                data={documents}
              />
            </div>
            <div className="w-full p-2 rounded-lg text-poster-blue">
              <JobOverviewAccordion
                title={"Documents"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                }
                data={documents}
              />
            </div>
            <div className="w-full p-2 rounded-lg text-poster-blue">
              <JobOverviewAccordion
                title={"Jobs"}
                icon={<img src={JobsIcon} alt="Icon" />}
                data={sites}
              />
            </div>
            <div className="w-full p-2 rounded-lg text-poster-blue">
              <JobOverviewAccordion
                title={"Schemantics"}
                icon={<img src={SchemanticsIcon} alt="Icon" />}
                data={sites}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteOverviewDetail;
