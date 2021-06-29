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

export function TableBody(props) {
  const type = props.type;

  const selector = (state) => state[type];

  const collection = useSelector(selector);

  const elementConstructor = ELEMENTS[type];

  const renderedNotes = collection.map((item, index) =>
    elementConstructor({ item, key: index })
  );

  return <div>{renderedNotes}</div>;
}
