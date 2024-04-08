import React, { useEffect, useState } from "react";
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
import NewContactModal from "components/common/NewContactModal";

export default function EditClient() {
  const { setSidebarOptions } = useSidebarOptions();
  const [fileData, setFileData] = useState<File>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [primaryContact, setPrimaryContact] = useState<string[]>([
    "info@mbe-london.co.uk.",
  ]);

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

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
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

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFileData(e.target.files[0]);
  };

  const addNewPrimaryContact = (newContact: string) => {
    setPrimaryContact((prevData) => [newContact, ...prevData]);
    closeModal();
  };

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
              <input
                className="w-full outline-none py-1"
                defaultValue={clientData[key].value}
              />
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
            <div className="flex items-center">
              {primaryContact.map((contact, key) => (
                <span key={key}>
                  {key !== 0 ? ",  " : ""}
                  {contact}
                </span>
              ))}
            </div>
            <button
              className="border w-24 h-7 px-1 flex items-center justify-between gap-3 border-poster-blue text-poster-blue"
              onClick={openModal}
            >
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
            <div className="flex items-center gap-2">
              <img src={PdfIcon} alt="icon" /> {fileData?.name}
            </div>
            <label
              htmlFor="file-upload"
              className="border w-24 h-7 px-1 flex items-center justify-between gap-3 border-poster-blue text-poster-blue cursor-pointer"
            >
              Upload <img src={UploadIcon} alt="icon" />
            </label>
            <input
              type="file"
              id="file-upload"
              hidden
              accept=".pdf, .docx, .xlsx"
              onChange={handleChangeFile}
            />
          </div>
        </div>
        {/* <div className={`${gridClass}`}>
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
        </div> */}
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
            <label className="inline-flex items-center me-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-pacific-blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pacific-blue"></div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button className="mt-4 bg-pacific-blue text-white p-3 rounded-lg">
          Save
        </button>
      </div>
      <NewContactModal
        showModal={showModal}
        closeModal={closeModal}
        addNewPrimaryContact={addNewPrimaryContact}
      />
    </div>
  );
}
