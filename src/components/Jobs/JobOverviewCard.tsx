import React from "react";
import HomeIcon from "../../assets/img/homeIconLight.png";
import JobTypeIcon from "../../assets/img/jobListIcon.png";
import PlusIcon from "../../assets/img/plusIconLight.png";
import SiteContactIcon from "../../assets/img/primaryContactIconLight.png";
import UserIcon from "../../assets/img/userIconLight.png";

const JobOverviewCard = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img
          className="rounded-t-lg h-64 w-full"
          src={"/docs/images/blog/image-1.jpg"}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://cdn-icons-png.flaticon.com/512/21/21104.png";
          }}
          alt="Client Image"
        />
      </a>
      <div className="p-5 text-poster-blue text-xs">
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={HomeIcon} alt="Icon" className="w-4 h-4 me-2" />
              <span>Site Name</span>
            </div>
            <div className="rounded-full bg-[#EBF1FD] text-[#2080F7] py-1 px-2 flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-[#2080F7] rounded-full" />
              Attention
            </div>
          </div>
          <div className="ml-6 my-3 text-sm">XYZ Hospital Trust</div>
        </div>
        <div>
          <div className="flex items-center">
            <img src={JobTypeIcon} alt="Icon" className="w-4 h-4 me-2" />
            <span>Job Type</span>
          </div>
          <div className="ml-6 my-3 text-sm">Validation</div>
        </div>
        <div>
          <div className="flex items-center">
            <img src={UserIcon} alt="Icon" className="w-4 h-4 me-2" />
            <span>Assigned Engineer</span>
          </div>
          <div className="ml-6 my-3 text-sm flex items-center gap-3">
            <div className="h-9 w-9 bg-[#D7D0C6] rounded-full" />
            Wilson Lipshutz
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <img src={SiteContactIcon} alt="Icon" className="w-4 h-4 me-2" />
            <span>Site Contact</span>
          </div>
          <div className="ml-6 my-3 text-sm">Patricia L. Dubose</div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            className="flex items-center gap-2 bg-hawkes-blue text-pacific-blue rounded-full p-3"
            aria-label="add-new-contact-btn"
          >
            Add New Contact
            <img src={PlusIcon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobOverviewCard;
