import { EditNoteForm } from "../ui/EditNoteForm.js";
import NoteControls from "../ui/NoteControls.js";
import { getCategoryName, getImgName } from "../utils/utils.js";
import { useState } from "react";

function ActiveNote(props) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const handleEditClick = (e) => {
    setIsBeingEdited(true);
  };

  const handleEditFinish = (e) => {
    setIsBeingEdited(false);
  };
  const note = props.item;

  if (!isBeingEdited) {
    return (
      <div className="row item">
        <div className="col-2 name">
          <img src={"/img/" + getImgName(note.category)} alt="" />
          <p>{note.name}</p>
        </div>
        <div className="col-1">{note.createdAt}</div>
        <div className="col-2 category">{getCategoryName(note.category)}</div>
        <div className="col-4 content">{note.content}</div>
        <div className="col-1">
          {note.dates.reduce((prev, cur) => {
            return prev + " " + cur;
          }, "")}
        </div>
        <NoteControls note={note} onEditClick={handleEditClick}></NoteControls>
      </div>
    );
  }
  return (
    <EditNoteForm note={note} onEditFinish={handleEditFinish}></EditNoteForm>
  );
}

export default ActiveNote;
