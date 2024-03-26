import React from "react";
import WordIcon from "../../assets/img/wordIcon.png";
import PdfIcon from "../../assets/img/pdfIcon.png";
import ExcelIcon from "../../assets/img/excelIcon.png";
import EditIcon from "../../assets/img/editIcon.png";
import DeleteIcon from "../../assets/img/deleteIcon.png";
import { useNavigate } from "react-router-dom";

interface DataTableProps {
  header: { title: string; icon: string }[];
  data: {
    badge: string;
    client_name: string;
    city: string;
    primary_contract: string;
    sites: string;
  }[];
}

const DataTable = ({ data, header }: DataTableProps) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-poster-blue">
        <thead className="text-xs text-poster-blue capitalize">
          <tr className="px-3 py-5 border-b border-pale-cornflower-blue">
            {header.map((data, index) => (
              <th scope="col" className="px-6 py-5 font-normal" key={index}>
                <div className="flex items-center gap-2">
                  <img src={data.icon} alt="icon" />
                  {data.title}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, key) => (
            <tr
              key={key}
              className="bg-white border-b border-pale-cornflower-blue px-3"
              onClick={() => navigate("/client-list/overview")}
            >
              <td className="px-6 py-4 cursor-pointer">
                <div
                  className={`${
                    row.badge === "Attention"
                      ? "bg-[#EBF1FD] text-[#2080F7]"
                      : "bg-[#FDEBEB] text-[#F72020]"
                  } py-1 px-2 rounded-full inline-flex items-center gap-3`}
                >
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${
                      row.badge === "Attention"
                        ? "bg-[#2080F7]"
                        : "bg-[#F72020]"
                    }`}
                  />
                  {row.badge}
                </div>
              </td>
              <td className="px-6 py-4 cursor-pointer">{row.client_name}</td>
              <td className="px-6 py-4 cursor-pointer">{row.city}</td>
              <td className="px-6 py-4 cursor-pointer">
                {row.primary_contract}
              </td>
              <td className="px-6 py-4 cursor-pointer">{row.sites}</td>
              <td className="px-6 py-4 flex items-end gap-3 cursor-pointer">
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
              <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex gap-2">
                  <img
                    src={EditIcon}
                    alt="icon"
                    onClick={() => navigate("/client-list/edit/1")}
                    className="bg-hawkes-blue p-1 rounded-lg cursor-pointer"
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
  );
};

export default DataTable;
