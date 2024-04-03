import React, { useEffect } from "react";
import PdfIcon from "../../assets/img/pdfIcon.png";
import UploadIcon from "../../assets/img/uploadDocIcon.png";
import PlusIcon from "../../assets/img/plusIcon.png";
import ClientIcon from "../../assets/img/clientsIcon.png";
import LocationIcon from "../../assets/img/locationIcon.png";
import CityIcon from "../../assets/img/cityIcon.png";
import EnvelopIcon from "../../assets/img/envelopIcon.png";
import PhoneIcon from "../../assets/img/phoneIcon.png";
import AtIcon from "../../assets/img/atIcon.png";
import PrimaryContactIcon from "../../assets/img/primaryContactIcon.png";
import DocTypeIcon from "../../assets/img/DocTypeIcon.png";
import RadioIcon from "../../assets/img/radioIcon.png";
import { useSidebarOptions } from "components/common/Layout";

export default function EditClient() {
  const { setSidebarOptions } = useSidebarOptions();

  const gridClass = "grid grid-cols-12 border border-b-pale-cornflower-blue";
  const colSpanClass =
    "col-span-3 bg-hawkes-blue px-3 py-6 text-poster-blue capitalize flex items-center text-xs";
  const colSpanClassInput =
    "col-span-9 px-3 py-5 text-poster-blue flex items-center text-xs";

  const clientData = {
    client_name: { value: "XYZ Hospital Trust", icon: ClientIcon },
    address_1: {
      value: "Gunnersbury House , 1 Chapel Hill",
      icon: LocationIcon,
    },
    address_2: { value: "9377 London Road", icon: LocationIcon },
    address_3: { value: "N/A", icon: LocationIcon },
    city: { value: "London", icon: CityIcon },
    post_code: { value: "NW28 4PU", icon: EnvelopIcon },
    contact_number: { value: "+44 20 7798 4097", icon: PhoneIcon },
    general_email: { value: "info@mbe-london.co.uk.", icon: AtIcon },
  };

  useEffect(() => {
    setSidebarOptions((prevObject) => {
      let updatedObject = {};
      updatedObject["client"] = true;

      Object.keys(prevObject).map((key) => {
        if (key !== "client") {
          updatedObject[key] = false;
        }
      });

      return updatedObject;
    });
  }, []);

  return (
    <div className="py-6 px-8 bg-alice-blue-50 flex-1 overflow-y-auto">
      <div className="text-poster-blue">Edit Client</div>
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
              <img src={PrimaryContactIcon} alt="icon" />
              <span>Primary Contact</span>
            </div>
          </div>
          <div className={`${colSpanClassInput} justify-between`}>
            <span>info@mbe-london.co.uk.</span>
            <button className="border w-24 h-7 px-1 flex items-center justify-between gap-3 border-poster-blue text-poster-blue">
              New <img src={PlusIcon} alt="icon" />
            </button>
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
}
