import { EditNoteForm } from "../ui/EditNoteForm.js";
import NoteControls from "../ui/NoteControls.js";
import { getCategoryName, getImgName } from "../utils/utils.js";
import React from "react";

class ActiveNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isBeingEdited: false };
    this.note = props.item;
  }

  handleEditClick(e) {
    this.setState({ isBeingEdited: true });
  }

  handleEditFinish(e) {
    this.setState({ isBeingEdited: false });
  }

  render() {
    if (!this.isBeingEdited) {
      return (
        <div className="row item">
          <div className="col-2 name">
            <img src={"/img/" + getImgName(this.note.category)} alt="" />
            <p>{this.note.name}</p>
          </div>
          <div className="col-1">{this.note.createdAt}</div>
          <div className="col-2 category">
            {getCategoryName(this.note.category)}
          </div>
          <div className="col-4 content">{this.note.content}</div>
          <div className="col-1">
            {this.note.dates.reduce((prev, cur) => {
              return prev + " " + cur;
            }, "")}
          </div>
          <NoteControls
            note={this.note}
            onEditClick={this.handleEditClick}
          ></NoteControls>
        </div>
      );
    }
    return (
      <EditNoteForm
        note={this.note}
        onEditFinish={this.handleEditFinish}
      ></EditNoteForm>
    );
  }
}

export default ActiveNote;
