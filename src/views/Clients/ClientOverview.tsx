import React, { useEffect } from "react";
import UserIcon from "../../assets/img/userIcon.png";
import ClientOverviewCard from "components/Clients/ClientOverviewCard";
import { useSidebarOptions } from "components/common/Layout";

const ClientOverview = () => {
  const { setSidebarOptions } = useSidebarOptions();

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
    <div className="py-6 px-8 bg-alice-blue-50 flex-1 overflow-y-auto">
      <div className="text-poster-blue text-lg">Client Overview</div>
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-3">
          <div className="flex items-center mb-3">
            <img src={UserIcon} alt="icon" />
            <span className="text-poster-blue text-sm ml-2">
              Contact Information
            </span>
          </div>
          <ClientOverviewCard />
        </div>
      </div>
    </div>
  );
};

export default ClientOverview;
