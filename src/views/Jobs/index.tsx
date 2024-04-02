import { useSidebarOptions } from "components/common/Layout";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientIcon from "../../assets/img/clientsIcon.png";
import ExcelIcon from "../../assets/img/excelIcon.png";
import WordIcon from "../../assets/img/wordIcon.png";
import PdfIcon from "../../assets/img/pdfIcon.png";
import SearchIcon from "../../assets/img/SearchIcon.png";
import JobListIcon from "../../assets/img/jobListIcon.png";
import BadgeIconLight from "../../assets/img/badgeIconLight.png";
import ClientIconLight from "../../assets/img/clientIconLight.png";
import SiteIcon from "../../assets/img/homeIconLight.png";
import AttachmentIcon from "../../assets/img/attachmentIconLight.png";
import ActionsIcon from "../../assets/img/actionIconLight.png";
import InvoicedIcon from "../../assets/img/InvoicedIcon.png";
import DataTable from "components/common/DataTable";
import ClientsFilters from "components/Clients/ClientsFilters";

const Jobs = () => {
  const { setSidebarOptions } = useSidebarOptions();
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");
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
    {
      title: "Job Type",
      icon: JobListIcon,
    },
    {
      title: "Client",
      icon: ClientIconLight,
    },
    {
      title: "Site",
      icon: SiteIcon,
    },
    {
      title: "Status",
      icon: SiteIcon,
    },
    {
      title: "Invoiced",
      icon: InvoicedIcon,
    },
    {
      title: "Report Completed",
      icon: SiteIcon,
    },
    {
      title: "Attachment",
      icon: AttachmentIcon,
    },
    {
      title: "Actions",
      icon: ActionsIcon,
    },
  ];

  const TD1 = new Array(2).fill({
    badge: "Expired",
    job_type: "Validation",
    client_name: "NHS Trust 1",
    site: "St Nicks",
    status: "Scheduled",
    invoiced: "3",
    report_completed: "NA",
  });

  const TD2 = new Array(2).fill({
    badge: "Attention",
    job_type: "Verification",
    client_name: "NHS Trust 1",
    site: "St Nicks",
    status: "Completed",
    invoiced: "3",
    report_completed: "NA",
  });

  const TD3 = new Array(2).fill({
    badge: "Expired",
    job_type: "Sampling",
    client_name: "NHS Trust 1",
    site: "St Nicks",
    status: "Not Scheduled",
    invoiced: "3",
    report_completed: "NA",
  });

  const TD4 = new Array(2).fill({
    badge: "Expired",
    job_type: "Validation",
    client_name: "NHS Trust 1",
    site: "St Nicks",
    status: "On Hold",
    invoiced: "3",
    report_completed: "NA",
  });

  const TD5 = new Array(2).fill({
    badge: "Attention",
    job_type: "Verification",
    client_name: "NHS Trust 1",
    site: "St Nicks",
    status: "In Progress",
    invoiced: "3",
    report_completed: "NA",
  });

  const tempData = [...TD1, ...TD2, ...TD3, ...TD4, ...TD5];

  const [data, setData] = useState(tempData);

  useEffect(() => {
    SiteIcon;
    setSidebarOptions({
      dashboard: false,
      client: false,
      schedule: false,
      jobs: true,
      messaging: false,
      settings: false,
    });
  }, []);

  const handleApplyFilters = (closeBox) => {
    let dataT = tempData;
    if (
      (showByBadgeFilter.attention && showByBadgeFilter.expired) ||
      (!showByBadgeFilter.attention && !showByBadgeFilter.expired)
    ) {
      setData(dataT);
    } else if (showByBadgeFilter.attention && !showByBadgeFilter.expired) {
      dataT = data.filter((curr) => curr.badge === "Attention");
      setData(dataT);
    } else {
      dataT = data.filter((curr) => curr.badge === "Expired");
      setData(dataT);
    }
    closeBox();
  };

  const handleClickClearFilter = () => {
    setShowByBadge(false);
    setShowByBadgeFilter({ attention: false, expired: false });
    setData(tempData);
  };

  return (
    <div className="py-6 px-8 bg-alice-blue-50">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-poster-blue">Job List</div>
          <div className="text-pacific-blue">09/02/2024</div>
        </div>
        <div>
          <button className="bg-hawkes-blue text-pacific-blue py-3 px-5 rounded-full">
            Add New Job +
          </button>
        </div>
      </div>
      <div className="mt-5 bg-white py-2 shadow-lg border border-pale-cornflower-blue rounded-lg">
        <div className="flex items-center justify-between px-3 mb-5">
          <div className="flex items-center text-poster-blue gap-5">
            <div className="flex items-center gap-2">
              <img src={JobListIcon} alt="icon" />
              Jobs (18)
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
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <div className="absolute right-16">
              <img src={SearchIcon} alt="icon" />
            </div>
          </div>
        </div>
        <hr className="h-0.5 border-t-0 bg-pale-cornflower-blue" />

        <DataTable header={tableHeader} data={data} page="jobs" />
      </div>
    </div>
  );
};

export default Jobs;
