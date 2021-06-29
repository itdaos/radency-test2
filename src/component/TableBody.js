import React from "react";
import { useSelector } from "react-redux";
import ActiveNote from "./ActiveNote.js";
import ArchiveNote from "./ArchiveNote.js";
import SummaryRow from "./SummaryRow.js";

const ELEMENTS = {
  notes: ActiveNote,
  archive: ArchiveNote,
  summary: SummaryRow,
};
// holder for all constructors
// TODO: Separate into some component/index.js

function renderingFunctor(type) {
  switch (type) {
    case "archive":
      return (item, index) => (
        <ArchiveNote item={item} key={index}></ArchiveNote>
      );
    case "summary":
      return (item, index) => <SummaryRow item={item} key={index}></SummaryRow>;
    default:
      return (item, index) => <ActiveNote item={item} key={index}></ActiveNote>;
  }
} // Could be DRYied

export function TableBody(props) {
  const type = props.type;

  const selector = (state) => state[type];

  const collection = useSelector(selector);

  const renderingFunction = renderingFunctor(type);

  const renderedRows = collection.map(renderingFunction);

  return <div>{renderedRows}</div>;
}
