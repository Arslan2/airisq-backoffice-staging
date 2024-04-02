import React from "react";
import { CardPropsType } from "views/Jobs/JobOverview";
import HomeIcon from "../../assets/img/homeIconLight.png";
import LocationIcon from "../../assets/img/locationIconLight.png";

interface SiteCardProps {
  details: CardPropsType;
}

const SiteCard = ({ details }: SiteCardProps) => {
  const imageSrcTemp =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbymDwtD8ItX8niCDWmXyF3_kyPeCXEpr1kA&usqp=CAU";

  return (
    <div className="w-full rounded-md border border-pale-cornflower-blue p-2">
      <div className="flex items-start justify-between">
        <img src={imageSrcTemp} alt="Icon" className="w-1/2" />
        <div
          className={`${
            details.badge === "Attention"
              ? "bg-[#EBF1FD] text-[#2080F7]"
              : "bg-[#FDEBEB] text-[#F72020]"
          } py-1 px-2 rounded-full inline-flex items-center gap-3`}
        >
          <div
            className={`h-1.5 w-1.5 rounded-full ${
              details.badge === "Attention" ? "bg-[#2080F7]" : "bg-[#F72020]"
            }`}
          />
          {details.badge}
        </div>
      </div>
      <div className="text-xs py-2 flex items-center gap-2">
        <img src={HomeIcon} alt="Icon" />
        Site
      </div>
      <div className="text-sm py-2 ml-6">{details.name}</div>
      <div className="text-xs flex items-center gap-2 py-2">
        <img src={LocationIcon} alt="Icon" />
        Location
      </div>
      <div className="text-sm py-2 ml-6">{details.location}</div>
    </div>
  );
};

export default SiteCard;
