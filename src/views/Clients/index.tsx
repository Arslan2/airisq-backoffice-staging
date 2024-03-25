import React from "react";
import ClientIcon from "../../assets/img/clientsIcon.png";
import FilterIcon from "../../assets/img/filterIcon.png";
import WordIcon from "../../assets/img/wordIcon.png";
import ExcelIcon from "../../assets/img/excelIcon.png";
import PdfIcon from "../../assets/img/pdfIcon.png";
import EditIcon from "../../assets/img/editIcon.png";
import DeleteIcon from "../../assets/img/deleteIcon.png";
import SearchIcon from "../../assets/img/SearchIcon.png";
import { useNavigate } from "react-router-dom";

export default function Clients() {

  const navigate = useNavigate();

  const data = new Array(19).fill({
    badge: "Attention",
    cName: "XYZ Hospital Trust",
    city: "London",
    primaryContract: "Patricia L. Dubose",
    sites: "3",
  });
  return (
    <div className="py-6 px-8 bg-alice-blue-50">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 text-poster-blue">
          <h5 className="">Dashboard</h5>
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
            <button className="flex items-center gap-2">
              <img src={FilterIcon} alt="icon" />
              Show Filters
            </button>
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

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-poster-blue">
            <thead className="text-xs text-gray-700 uppercase">
              <tr className="px-3 py-5 border-b border-pale-cornflower-blue">
                <th scope="col" className="px-6 py-5">
                  Badge
                </th>
                <th scope="col" className="px-6 py-5">
                  Client Name
                </th>
                <th scope="col" className="px-6 py-5">
                  City
                </th>
                <th scope="col" className="px-6 py-5">
                  Primary Contact
                </th>
                <th scope="col" className="px-6 py-5">
                  Number of Sites
                </th>
                <th scope="col" className="px-6 py-5">
                  Attachments
                </th>
                <th scope="col" className="px-6 py-5">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, key) => (
                <tr
                  key={key}
                  className="bg-white border-b border-pale-cornflower-blue px-3"
                >
                  <td className="px-6 py-4">
                    <span className="bg-blue-200 py-1 px-2 rounded-full">
                      {row.badge}
                    </span>
                  </td>
                  <td className="px-6 py-4">{row.cName}</td>
                  <td className="px-6 py-4">{row.city}</td>
                  <td className="px-6 py-4">{row.primaryContract}</td>
                  <td className="px-6 py-4">{row.sites}</td>
                  <td className="px-6 py-4 flex items-end gap-3">
                    <div className="flex items-end gap-1">
                      <img src={WordIcon} alt="icon" /> <span>(4)</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <img src={PdfIcon} alt="icon" /> <span>(4)</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <img src={ExcelIcon} alt="icon" /> <span>(4)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <img
                        src={EditIcon}
                        alt="icon"
                        onClick={() => navigate('/client-list/edit/1')}
                        className="bg-hawkes-blue p-1 rounded-lg"
                      />
                      <img
                        src={DeleteIcon}
                        alt="Icon"
                        className="bg-hawkes-blue p-1 rounded-lg"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
