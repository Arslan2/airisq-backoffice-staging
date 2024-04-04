import DataTable from "components/common/DataTable";
import React, { useState } from "react";
import { CardPropsType } from "views/Jobs/JobOverview";
import SearchIcon from "../../assets/img/SearchIcon.png";
import ActionsIcon from "../../assets/img/actionIconLight.png";
import AttachmentIcon from "../../assets/img/attachmentIconLight.png";
import BadgeIconLight from "../../assets/img/badgeIconLight.png";
import ClientIconLight from "../../assets/img/clientIconLight.png";
import ExcelIcon from "../../assets/img/excelIcon.png";
import HomeIcon from "../../assets/img/homeIconLight.png";
import PdfIcon from "../../assets/img/pdfIcon.png";
import UserIcon from "../../assets/img/userIconLight.png";
import WordIcon from "../../assets/img/wordIcon.png";
import ClientsFilters from "components/Clients/ClientsFilters";
import ReportsIcon from "../../assets/img/reportsIcon.png";

interface ContactOverviewAccordionProps {
  title: string;
  icon: React.ReactElement<React.SVGProps<SVGElement>>;
  data: CardPropsType[];
}

const SitesAccordion = ({ title, icon }: ContactOverviewAccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [showByBadge, setShowByBadge] = useState(false);
  const [showByBadgeFilter, setShowByBadgeFilter] = useState({
    attention: false,
    expired: false,
  });

  const tableHeader = [
    {
      title: "badge",
      icon: BadgeIconLight,
    },
    { title: "Site Name", icon: HomeIcon },
    { title: "Client", icon: ClientIconLight },
    { title: "Address", icon: HomeIcon },
    { title: "City", icon: HomeIcon },
    { title: "Reports", icon: ReportsIcon },
    { title: "Attachments", icon: AttachmentIcon },
    { title: "Actions", icon: ActionsIcon },
  ];

  const sites = new Array(10).fill({
    badge: "Attention",
    site_name: "XYZ Hospital Trust",
    client: "NHS Trust 1",
    address: "123 The Road",
    city: "London",
    reports: "2",
  });

  const tempData = sites;

  const [tData, setTData] = useState(tempData);

  const handleApplyFilters = (closeBox) => {
    let dataT = tempData;
    if (
      (showByBadgeFilter.attention && showByBadgeFilter.expired) ||
      (!showByBadgeFilter.attention && !showByBadgeFilter.expired)
    ) {
      setTData(dataT);
    } else if (showByBadgeFilter.attention && !showByBadgeFilter.expired) {
      dataT = tData.filter((curr) => curr.badge === "Attention");
      setTData(dataT);
    } else {
      dataT = tData.filter((curr) => curr.badge === "Expired");
      setTData(dataT);
    }
    console.log("Data after filteration is: ", dataT);
    closeBox();
  };

  const handleClickClearFilter = () => {
    setShowByBadge(false);
    setShowByBadgeFilter({ attention: false, expired: false });
    setTData(tempData);
  };

  return (
    <div className="py-0.5">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`w-full p-2 rounded-t-lg flex justify-between items-center ${
          accordionOpen
            ? "bg-pacific-blue text-poster-blue"
            : "bg-hawkes-blue text-pacific-blue"
        }`}
      >
        <div className="flex items-center gap-2 text-base">
          {icon}
          <span>{title}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 transform origin-center transition duration-200 ease-out ${
            accordionOpen && "!rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out text-poster-blue bg-white border border-pale-cornflower-blue rounded-b-lg ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex items-center justify-between px-3 mb-5 pt-3">
            <div className="flex items-center text-poster-blue gap-5">
              <div className="flex items-center gap-2">
                <img src={HomeIcon} alt="icon" />
                Sites (22)
              </div>
              <ClientsFilters
                handleClickClearFilter={handleClickClearFilter}
                handleApplyFilters={handleApplyFilters}
                showByBadge={showByBadge}
                setShowByBadge={setShowByBadge}
                showByBadgeFilter={showByBadgeFilter}
                setShowByBadgeFilter={setShowByBadgeFilter}
              />
            </div>
            <div className="flex items-center justify-end gap-3">
              <img src={ExcelIcon} alt="icon" />
              <img src={WordIcon} alt="icon" />
              <img src={PdfIcon} alt="icon" />
              <input
                placeholder="Search"
                className="py-2 px-3 w-2/3 bg-alice-blue rounded-full placeholder-poster-blue relative"
                //   onChange={(e) => setSearch(e.target.value)}
                //   value={search}
              />
              <div className="absolute right-16">
                <img src={SearchIcon} alt="icon" />
              </div>
            </div>
          </div>
          <hr className="h-0.5 border-t-0 bg-pale-cornflower-blue" />
          <DataTable
            header={tableHeader}
            data={tData}
            page="sites"
            editLink="#"
            overviewPageLink="#"
          />
        </div>
      </div>
    </div>
  );
};

export default SitesAccordion;
