import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useSidebarOptions } from "components/common/Layout";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/img/SearchIcon.png";
import ClientIcon from "../../assets/img/clientsIcon.png";
import DeleteIcon from "../../assets/img/deleteIcon.png";
import EditIcon from "../../assets/img/editIcon.png";
import ExcelIcon from "../../assets/img/excelIcon.png";
import FilterIcon from "../../assets/img/filterIcon.png";
import PdfIcon from "../../assets/img/pdfIcon.png";
import WordIcon from "../../assets/img/wordIcon.png";
import ClientsFilters from "components/Clients/ClientsFilters";
import DataTable from "components/common/DataTable";

export default function Clients() {
  const navigate = useNavigate();
  const { setSidebarOptions } = useSidebarOptions();
  const [showByBadge, setShowByBadge] = useState(false);
  const [showByBadgeFilter, setShowByBadgeFilter] = useState({
    attention: false,
    expired: false,
  });
  const [search, setSearch] = useState("");

  const tableHeader = [
    "badge",
    "client name",
    "city",
    "primary contract",
    "number of sites",
    "attachments",
    "actions",
  ];

  const TD1 = new Array(5).fill({
    badge: "Attention",
    client_name: "XYZ Hospital Trust",
    city: "London",
    primary_contract: "Patricia L. Dubose",
    sites: "3",
  });

  const TD2 = new Array(5).fill({
    badge: "Expired",
    client_name: "XYZ Hospital Trust",
    city: "London",
    primary_contract: "Patricia L. Dubose",
    sites: "3",
  });

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

  const handleChangeSearch = () => {
    //API call here
  };

  useEffect(() => {
    setSidebarOptions({
      dashboard: false,
      client: true,
      schedule: false,
      jobs: false,
      messaging: false,
      settings: false,
    });
  }, []);

  return (
    <div className="py-6 px-8 bg-alice-blue-50">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 text-poster-blue">
          <h5 className="cursor-pointer" onClick={() => navigate("/")}>
            Dashboard
          </h5>
          <h5 className="">Client List</h5>
        </div>
        <div>
          <button className="bg-pacific-blue text-white py-3 px-5 rounded-full">
            Add New Client +
          </button>
        </div>
      </div>
      <div className="mt-5 bg-white py-2 shadow-lg border border-pale-cornflower-blue rounded-lg">
        <div className="flex items-center justify-between px-3 mb-5">
          <div className="flex items-center text-poster-blue gap-5">
            <div className="flex items-center gap-2">
              <img src={ClientIcon} alt="icon" />
              Clients (799)
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

        <DataTable header={tableHeader} data={data} />
      </div>
    </div>
  );
}
