import React, { useEffect } from "react";
import { useSidebarOptions } from "components/common/Layout";
import DocTypeIcon from "../../../assets/img/DocTypeIcon.png";
import ClientIcon from "../../../assets/img/clientsIcon.png";
import LocationIcon from "../../../assets/img/locationIcon.png";
import PdfIcon from "../../../assets/img/pdfIcon.png";
import PrimaryContactIcon from "../../../assets/img/primaryContactIcon.png";
import RadioIcon from "../../../assets/img/radioIcon.png";
import UploadIcon from "../../../assets/img/uploadDocIcon.png";

const EditContacts = () => {
  const { setSidebarOptions } = useSidebarOptions();

  const gridClass = "grid grid-cols-12 border border-b-pale-cornflower-blue";
  const colSpanClass =
    "col-span-3 bg-hawkes-blue px-3 py-6 text-poster-blue capitalize flex items-center text-xs";
  const colSpanClassInput =
    "col-span-9 px-3 py-5 text-poster-blue flex items-center text-xs";

  const clientData = {
    first_name: { value: "Patricia", icon: ClientIcon },
    last_name: { value: "Dubose", icon: LocationIcon },
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
    <div className="py-6 px-8 bg-alice-blue-50 flex-1 overflow-y-auto">
      <div className="text-poster-blue">Edit Contact</div>
      <div className="text-pacific-blue">09/02/2024</div>
      <div className="mt-5 bg-white shadow-lg border border-pale-cornflower-blue rounded-lg">
        {Object.keys(clientData).map((key, index) => (
          <div className={`${gridClass}`} key={index}>
            <div className={`${colSpanClass}`}>
              <div className="flex items-center gap-2">
                <img src={clientData[key].icon} alt="icon" />
                <span>{key.split("_").join(" ")}</span>
              </div>
            </div>
            <div className={`${colSpanClassInput}`}>
              {clientData[key].value}
            </div>
          </div>
        ))}
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass}`}>
            <div className="flex items-center gap-2">
              <img src={DocTypeIcon} alt="icon" />
              <span>Role</span>
            </div>
          </div>
          <div className={`${colSpanClassInput}`}>
            <div className="flex items-center justify-between w-full">
              <span>Manager</span>
              <div>
                <select className="border border-poster-blue w-24 h-7 px-1 bg-transparent">
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass}`}>
            <div className="flex items-center gap-2">
              <img src={ClientIcon} alt="icon" />
              <span>Client</span>
            </div>
          </div>
          <div className={`${colSpanClassInput}`}>XYZ Hospital Trust</div>
        </div>
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass}`}>
            <div className="flex items-center gap-2">
              <img src={PrimaryContactIcon} alt="icon" />
              <span>Sites</span>
            </div>
          </div>
          <div className={`${colSpanClassInput} justify-end`}>
            <select className="border border-poster-blue w-24 h-7 px-1 bg-transparent">
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass}`}>
            <div className="flex items-center gap-2">
              <img src={UploadIcon} alt="icon" />
              <span>Contact Number</span>
            </div>
          </div>
          <div className={`${colSpanClassInput} justify-between`}>
            +44 20 7798 4097
          </div>
        </div>
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass}`}>
            <div className="flex items-center gap-2">
              <img src={DocTypeIcon} alt="icon" />
              <span>Email</span>
            </div>
          </div>
          <div className={`${colSpanClassInput}`}>
            <div className="flex items-center justify-between w-full">
              <span>info@mbe-london.co.uk.</span>
            </div>
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
        <div className={`${gridClass}`}>
          <div className={`${colSpanClass}`}>
            <div className="flex items-center gap-2">
              <img src={RadioIcon} alt="icon" />
              <span>Mark Inactive</span>
            </div>
          </div>
          <div
            className={`${colSpanClassInput} flex- items-center justify-end`}
          >
            <input
              type="checkbox"
              className="h-7 w-7 border border-poster-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContacts;
