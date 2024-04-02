import React from "react";
import { CardPropsType } from "views/Jobs/JobOverview";
import DeleteIcon from "../../assets/img/deleteIcon.png";
import EditIcon from "../../assets/img/editIcon.png";

interface DocumentCardProps {
  details: CardPropsType
}

const DocumentCard = ({ details }: DocumentCardProps) => {
  return (
    <div className="w-full rounded-md border border-pale-cornflower-blue p-2">
      <div className="flex items-center justify-between">
        <span className="text-xs">Name</span>
        <div className="flex items-center gap-2">
          <img src={EditIcon} alt="Icon" />
          <img src={DeleteIcon} alt="Icon" />
        </div>
      </div>
      <div className="text-sm">{details.name}</div>
      <img src={details.icon} alt="Icon" className="my-2" />
      <div className="text-xs">Last Updated</div>
      <div className="text-sm">{details.last_updated}</div>
    </div>
  );
};

export default DocumentCard;
