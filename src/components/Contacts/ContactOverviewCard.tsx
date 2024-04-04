import React from "react";
import AtIcon from "../../assets/img/atIconLight.png";
import ClientIcon from "../../assets/img/clientIconLight.png";
import UserDefaultImage from "../../assets/img/clientOverviewDefaultImage.png";
import PhoneIcon from "../../assets/img/phoneIconLight.png";
import PlusIcon from "../../assets/img/plusIconLight.png";
import RoleIcon from "../../assets/img/roleIconLight.png";
import UserIcon from "../../assets/img/userIconLight.png";

const ContactOverviewCard = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img
          className="rounded-t-lg h-64 w-full"
          src={"/docs/images/blog/image-1.jpg"}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = UserDefaultImage;
          }}
          alt="Client Image"
        />
      </a>
      <div className="p-5 text-poster-blue text-xs">
        <div>
          <div className="flex justify-between">
            <div className="flex items-center" data-testid="contactName">
              <img src={UserIcon} alt="Icon" className="w-4 h-4 me-2" />
              <span>Name</span>
            </div>
            <div className="rounded-full bg-[#EBF1FD] text-[#2080F7] py-1 px-2 flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-[#2080F7] rounded-full" />
              Attention
            </div>
          </div>
          <div className="ml-6 my-3 text-sm">John Doe</div>
        </div>
        <div>
          <div className="flex items-center">
            <img src={ClientIcon} alt="Icon" className="w-4 h-4 me-2" />
            <span>Client</span>
          </div>
          <div className="ml-6 my-3 text-sm">XYZ Hospital Trust</div>
        </div>
        <div>
          <div className="flex items-center">
            <img src={RoleIcon} alt="Icon" className="w-4 h-4 me-2" />
            <span>Role</span>
          </div>
          <div className="ml-6 my-3 text-sm">Manager</div>
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
            <span>Email</span>
          </div>
          <div className="ml-6 my-3 text-sm">info@mbe-london.co.uk</div>
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

export default ContactOverviewCard;
