import React, { useEffect, useState } from "react";
import ClientsFilters from "components/Clients/ClientsFilters";
import DataTable from "components/common/DataTable";
import { useSidebarOptions } from "components/common/Layout";
import SearchIcon from "../../../assets/img/SearchIcon.png";
import ActionsIcon from "../../../assets/img/actionIconLight.png";
import AttachmentIcon from "../../../assets/img/attachmentIconLight.png";
import BadgeIconLight from "../../../assets/img/badgeIconLight.png";
import ClientIconLight from "../../../assets/img/clientIconLight.png";
import ClientIcon from "../../../assets/img/clientsIcon.png";
import ExcelIcon from "../../../assets/img/excelIcon.png";
import SiteIcon from "../../../assets/img/homeIconLight.png";
import PdfIcon from "../../../assets/img/pdfIcon.png";
import UserIconLight from "../../../assets/img/userIconLight.png";
import WordIcon from "../../../assets/img/wordIcon.png";

const Contacts = () => {
  const { setSidebarOptions } = useSidebarOptions();
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
      title: "Name",
      icon: UserIconLight,
    },
    {
      title: "Client",
      icon: ClientIconLight,
    },
    {
      title: "Sites",
      icon: SiteIcon,
    },
    {
      title: "Contact Number",
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

  const tempData = new Array(10).fill({
    badge: "Expired",
    name: "Patricia L. Dubose",
    client: "XYZ Hospital Trust",
    sites: "St Nicks",
    contact_number: "01234 555 667",
  });

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

  useEffect(() => {
    setSidebarOptions((prevObject) => {
      let updatedObject = {};
      updatedObject["contacts"] = true;

      Object.keys(prevObject).map((key) => {
        if (key !== "contacts") {
          updatedObject[key] = false;
        }
      });

      return updatedObject;
    });
  }, []);

  return (
    <div className="py-6 px-8 bg-alice-blue-50">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-poster-blue">Contact List</div>
          <div className="text-pacific-blue">09/02/2024</div>
        </div>
        <div>
          <button className="bg-hawkes-blue text-pacific-blue py-3 px-5 rounded-full">
            Add New Contact +
          </button>
        </div>
      </div>
      <div className="mt-5 bg-white py-2 shadow-lg border border-pale-cornflower-blue rounded-lg">
        <div className="flex items-center justify-between px-3 mb-5">
          <div className="flex items-center text-poster-blue gap-5">
            <div className="flex items-center gap-2">
              <img src={ClientIcon} alt="icon" />
              Contacts (155)
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
          editLink="/client-list/contacts/edit/1"
          page="contacts"
          overviewPageLink="/client-list/contacts/overview/1"
        />
      </div>
    </div>
  );
};

export default Contacts;
