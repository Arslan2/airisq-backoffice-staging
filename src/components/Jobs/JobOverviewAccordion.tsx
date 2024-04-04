import React, { useState } from "react";
import { CardPropsType } from "views/Jobs/JobOverview";
import DocumentCard from "./DocumentCard";
import SiteCard from "./SiteCard";

interface JobOverviewAccordionProps {
  title: string;
  icon: React.ReactElement<React.SVGProps<SVGElement>>;
  data: CardPropsType[];
}

const JobOverviewAccordion = ({
  title,
  icon,
  data,
}: JobOverviewAccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-0.5">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`w-full p-2 rounded-t-lg flex justify-between items-center ${
          accordionOpen
            ? "bg-pacific-blue text-poster-blue"
            : "bg-hawkes-blue text-pacific-blue"
        }`}
      >
        <div className="flex items-center gap-2 text-base">
          {icon}
          <span>{title}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 transform origin-center transition duration-200 ease-out ${
            accordionOpen && "!rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out text-poster-blue bg-white border border-pale-cornflower-blue rounded-b-lg ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-12 gap-3 p-2">
            {data.map((data, key) => (
              <div className="col-span-3" key={key}>
                {title === "Documents" ? (
                  <DocumentCard details={data} />
                ) : title === "Sites" ? (
                  <SiteCard details={data} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOverviewAccordion;
