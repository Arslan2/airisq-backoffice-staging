import React, { useEffect, useState } from "react";
import HomeIconLight from "../../../assets/img/homeIconLight.png";
import ExcelIcon from "../../../assets/img/excelIcon.png";
import WordIcon from "../../../assets/img/wordIcon.png";
import PdfIcon from "../../../assets/img/pdfIcon.png";
import SearchIcon from "../../../assets/img/SearchIcon.png";
import { useSidebarOptions } from "components/common/Layout";
import BadgeIconLight from "../../../assets/img/badgeIconLight.png";
import HomeIcon from "../../../assets/img/homeIconLight.png";
import ClientIconLight from "../../../assets/img/clientIconLight.png";
import LocationIcon from "../../../assets/img/locationIconLight.png";
import CityIconLight from "../../../assets/img/cityIconLight.png";
import ReportsIcon from "../../../assets/img/reportsIcon.png";
import AttachmentIcon from "../../../assets/img/attachmentIconLight.png";
import ActionsIcon from "../../../assets/img/actionIconLight.png";
import DataTable from "components/common/DataTable";
import ClientsFilters from "components/Clients/ClientsFilters";

const Sites = () => {
  const { setSidebarOptions } = useSidebarOptions();
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
      title: "Site Name",
      icon: HomeIcon,
    },
    {
      title: "Client",
      icon: ClientIconLight,
    },
    {
      title: "Address",
      icon: LocationIcon,
    },
    {
      title: "City",
      icon: CityIconLight,
    },
    {
      title: "Reports",
      icon: ReportsIcon,
    },
    {
      title: "Attachments",
      icon: AttachmentIcon,
    },
    {
      title: "Actions",
      icon: ActionsIcon,
    },
  ];

  const TD1 = new Array(5).fill({
    badge: "Attention",
    site_name: "XYZ Hospital Trust",
    client: "NHS Trust 1",
    address: "123 The Road",
    city: "London",
    reports: "2",
  });

  const TD2 = new Array(5).fill({
    badge: "Expired",
    site_name: "XYZ Hospital Trust",
    client: "NHS Trust 1",
    address: "123 The Road",
    city: "London",
    reports: "2",
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

  const tempData = [...TD1, ...TD2];

  const [data, setData] = useState(tempData);

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
          <div className="text-poster-blue">Site List</div>
          <div className="text-pacific-blue">09/02/2024</div>
        </div>
        <div>
          <button className="bg-hawkes-blue text-pacific-blue py-3 px-5 rounded-full">
            Add New Site +
          </button>
        </div>
      </div>
      <div className="mt-5 bg-white py-2 shadow-lg border border-pale-cornflower-blue rounded-lg">
        <div className="flex items-center justify-between px-3 mb-5">
          <div className="flex items-center text-poster-blue gap-5">
            <div className="flex items-center gap-2">
              <img src={HomeIconLight} alt="icon" />
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
          data={data}
          page="sites"
          editLink="/client-list/sites/edit/1"
        />
      </div>
    </div>
  );
};

export default Sites;
