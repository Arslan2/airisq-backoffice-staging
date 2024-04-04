import React from "react";
import HomeIcon from "../../assets/img/homeIconLight.png";
import JobTypeIcon from "../../assets/img/jobListIcon.png";
import PlusIcon from "../../assets/img/plusIconLight.png";
import SiteContactIcon from "../../assets/img/primaryContactIconLight.png";
import UserIcon from "../../assets/img/userIconLight.png";
import SitesDefaultImage from "../../assets/img/jobOverviewDefaultImage.png";
import ClientIcon from "../../assets/img/clientIconLight.png";
import LocationIcon from "../../assets/img/locationIconLight.png";
import PhoneIcon from "../../assets/img/phoneIconLight.png";
import AtIcon from "../../assets/img/atIconLight.png";

const SitesOverviewDetailCard = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img
          className="rounded-t-lg h-64 w-full"
          src={"/docs/images/blog/image-1.jpg"}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = SitesDefaultImage;
          }}
          alt="Client Image"
        />
      </a>
      <div className="p-5 text-poster-blue text-xs">
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={ClientIcon} alt="Icon" className="w-4 h-4 me-2" />
              <span>Client Name</span>
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
            <img src={LocationIcon} alt="Icon" className="w-4 h-4 me-2" />
            <span>Address</span>
          </div>
          <div className="ml-6 my-3 text-sm">
            Gunnersbury House , 1 Chapel Hill
            <br />
            9377 London Road
            <br />
            London
            <br />
            SE1 4AB
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <img src={PhoneIcon} alt="Icon" className="w-4 h-4 me-2" />
            <span>Contact Number</span>
          </div>
          <div className="ml-6 my-3 text-sm">+44 20 7798 4097</div>
        </div>
        <div>
          <div className="flex items-center">
            <img src={AtIcon} alt="Icon" className="w-4 h-4 me-2" />
            <span>General Email</span>
          </div>
          <div className="ml-6 my-3 text-sm">info@mbe-london.co.uk</div>
        </div>
        <div>
          <div className="flex items-center">
            <img src={UserIcon} alt="Icon" className="w-4 h-4 me-2" />
            <div className="flex items-center gap-2">
              Assigned Engineers{" "}
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
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
          </div>
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

export default SitesOverviewDetailCard;