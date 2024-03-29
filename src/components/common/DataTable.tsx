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
    badge?: string;
    client_name?: string;
    city?: string;
    primary_contract?: string;
    sites?: string;
    job_type?: string;
    site?: string;
    status?: string;
    invoiced?: string;
    report_completed?: string;
  }[];
  page: string;
}

const DataTable = ({ data, header, page }: DataTableProps) => {
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
              onClick={() =>
                navigate(
                  page === "clients"
                    ? "/client-list/overview"
                    : "/jobs/overview/1"
                )
              }
            >
              {Object.keys(row).map((key, index) => (
                <td className="px-6 py-4 cursor-pointer">
                  {key === "badge" ? (
                    <div
                      className={`${
                        row[key] === "Attention"
                          ? "bg-[#EBF1FD] text-[#2080F7]"
                          : "bg-[#FDEBEB] text-[#F72020]"
                      } py-1 px-2 rounded-full inline-flex items-center gap-3`}
                    >
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${
                          row[key] === "Attention"
                            ? "bg-[#2080F7]"
                            : "bg-[#F72020]"
                        }`}
                      />
                      {row[key]}
                    </div>
                  ) : page === "jobs" && key === "status" ? (
                    <JobStatus status={row[key]} />
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
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
                    onClick={() =>
                      navigate(
                        page === "clients"
                          ? "/client-list/edit/1"
                          : "/jobs/edit/1"
                      )
                    }
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

const JobStatus = ({ status }: { status: string }) => {
  const background =
    status === "Completed"
      ? "bg-[#F0FFFC]"
      : status === "Not Scheduled"
      ? "bg-[#FDEBEB]"
      : status === "On Hold"
      ? "bg-[#FFF0DB]"
      : status === "In Progress"
      ? "bg-[#DBE2F2]"
      : status === "Scheduled"
      ? "bg-[#EBF1FD]"
      : "";

  const textColor =
    status === "Completed"
      ? "text-[#3DB39E]"
      : status === "Not Scheduled"
      ? "text-[#F72020]"
      : status === "On Hold"
      ? "text-[#F4A118]"
      : status === "In Progress"
      ? "text-[#13137A]"
      : status === "Scheduled"
      ? "text-[#2080F7]"
      : "";

  const dotBG =
    status === "Completed"
      ? "bg-[#3DB39E]"
      : status === "Not Scheduled"
      ? "bg-[#F72020]"
      : status === "On Hold"
      ? "bg-[#F4A118]"
      : status === "In Progress"
      ? "bg-[#13137A]"
      : status === "Scheduled"
      ? "bg-[#2080F7]"
      : "";
  return (
    <div
      className={`${
        textColor + " " + background
      } py-1 px-2 rounded-full inline-flex items-center gap-3`}
    >
      <div className={`h-1.5 w-1.5 rounded-full ${dotBG}`} />
      {status}
    </div>
  );
};

export default DataTable;
