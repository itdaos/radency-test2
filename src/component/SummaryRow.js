import React from "react";
import { useSelector } from "react-redux";
import { getCategoryName } from "../utils/utils";

function SummaryRow(props) {
  const category = props.category;

  const summary = { active: 0, archive: 0 };

  const notes = useSelector((state) => state.notes);
  const archive = useSelector((state) => state.archive);

  summary.active = notes.filter((note) => note.category === category).length;
  summary.archive = archive.filter((note) => note.category === category).length;

  return (
    <div className="row item">
      <div class="col-1"></div>
      <div class="col-2">{getCategoryName(category)}</div>
      <div class="col-4">{summary.active}</div>
      <div class="col-4">{summary.archive}</div>
    </div>
  );
}

export default SummaryRow;
