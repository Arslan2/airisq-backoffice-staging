import { Menu, Transition } from "@headlessui/react";
import { useSidebarOptions } from "components/common/Layout";
import React, { Fragment, useEffect } from "react";
import DocTypeIcon from "../../assets/img/DocTypeIcon.png";
import ClientIcon from "../../assets/img/clientsIcon.png";
import LocationIcon from "../../assets/img/locationIcon.png";
import PdfIcon from "../../assets/img/pdfIcon.png";
import PlusIcon from "../../assets/img/plusIcon.png";
import PrimaryContactIcon from "../../assets/img/primaryContactIcon.png";
import UploadIcon from "../../assets/img/uploadDocIcon.png";
import UserIcon from "../../assets/img/userIcon.png";
import JobDescriptionIcon from "../../assets/img/jobDescriptionIcon.png";

const EditJob = () => {
  const { setSidebarOptions } = useSidebarOptions();

  const gridClass = "grid grid-cols-12 border border-b-pale-cornflower-blue";
  const colSpanClass =
    "col-span-3 bg-hawkes-blue px-3 py-6 text-poster-blue capitalize flex items-center text-xs";
  const colSpanClassInput =
    "col-span-9 px-3 py-5 text-poster-blue flex items-center text-xs";

  const jobData = {
    site_name: { value: "XYZ Hospital Trust", icon: ClientIcon },
    job_type: {
      value: "Validation",
      icon: LocationIcon,
    },
  };

  const engineersNameList = [
    "Ahamd Ekstrom Botman",
    "Steve Vaccaro",
    "Tiana Kenter",
    "Giana Torff",
    "Anika Levin",
    "Ryan Gouse",
    "Charlie Gouse",
  ];

  useEffect(() => {
    setSidebarOptions((prevObject) => {
      let updatedObject = {};
      updatedObject["jobs"] = true;

      Object.keys(prevObject).map((key) => {
        if (key !== "jobs") {
          updatedObject[key] = false;
        }
      });

      return updatedObject;
    });
  }, []);
  return (
    <div className="py-6 px-8 bg-alice-blue-50 flex-1 overflow-y-auto">
      <div className="text-poster-blue">Edit Job</div>
      <div className="text-pacific-blue">09/02/2024</div>
      <div className="mt-5 bg-white shadow-lg border border-pale-cornflower-blue rounded-lg">
        {Object.keys(jobData).map((key, index) => (
          <div className={`${gridClass}`} key={index}>
            <div className={`${colSpanClass}`}>
              <div className="flex items-center gap-2">
                <img src={jobData[key].icon} alt="icon" />
                <span>{key.split("_").join(" ")}</span>
              </div>
            </div>
            <div className={`${colSpanClassInput}`}>{jobData[key].value}</div>
          </div>
        ))}
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass}`}>
            <div className="flex items-center gap-2">
              <img src={UserIcon} alt="icon" />
              <span>Assigned Engineer</span>
            </div>
          </div>
          <div className={`${colSpanClassInput} justify-end w-full`}>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="border border-poster-blue w-24 h-7 px-1 bg-transparent flex items-center justify-between">
                  Select
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 w-96 origin-top-right bg-white shadow-xl border border-pacific-blue focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`flex items-center justify-between px-7 h-6 bg-[#EBF1FD] text-xs py-7`}
                      >
                        <div>Name</div>
                        <div>Status</div>
                      </div>
                    )}
                  </Menu.Item>
                  {engineersNameList.map((name, key) => (
                    <Menu.Item key={key}>
                      {({ active }) => (
                        <div className="flex items-center justify-between px-6 py-7 border border-b-[#A5C9FF]">
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 bg-[#D5D1BF] rounded-full" />
                            <div>{name}</div>
                          </div>
                          <div className="flex items-center gap-2 bg-[#EBF1FD] text-[#2080F7] py-2 px-4 rounded-full">
                            <div className="h-1.5 w-1.5 bg-[#2080F7] rounded-full" />
                            Active
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass}`}>
            <div className="flex items-center gap-2">
              <img src={PrimaryContactIcon} alt="icon" />
              <span>Site Contact</span>
            </div>
          </div>
          <div className={`${colSpanClassInput} justify-between`}>
            <span>Patricia L. Dubose</span>
            <button className="border w-24 h-7 px-1 flex items-center justify-between gap-3 border-poster-blue text-poster-blue">
              New <img src={PlusIcon} alt="icon" />
            </button>
          </div>
        </div>
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass} !items-start`}>
            <div className="flex items-center gap-2">
              <img src={JobDescriptionIcon} alt="icon" />
              <span>Job Description</span>
            </div>
          </div>
          <div className={"col-span-9 px-3 py-5 text-poster-blue text-xs"}>
            <div className="pb-4">London</div>
            <div className="py-4">NW28 4PU</div>
            <div className="py-4">+44 20 7798 4097</div>
            <div className="pt-4">info@mbe-london.co.uk.</div>
          </div>
        </div>
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass}`}>
            <div className="flex items-center gap-2">
              <img src={UploadIcon} alt="icon" />
              <span>Document Upload</span>
            </div>
          </div>
          <div className={`${colSpanClassInput} justify-between`}>
            <img src={PdfIcon} alt="icon" />
            <button
              className="border w-24 h-7 px-1 flex items-center justify-between gap-3 border-poster-blue text-poster-blue"
              aria-label="upload-button"
            >
              Upload <img src={UploadIcon} alt="icon" />
            </button>
          </div>
        </div>
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass}`}>
            <div className="flex items-center gap-2">
              <img src={DocTypeIcon} alt="icon" />
              <span>Document Type</span>
            </div>
          </div>
          <div className={`${colSpanClassInput}`}>
            <div className="flex items-center justify-between w-full">
              <span>.pdf</span>
              <div>
                <select className="border border-poster-blue w-24 h-7 px-1 bg-transparent">
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
