import React from "react";
import store, { noteDeleted } from "../redux/store";

class NoteControls extends React.Component {
  constructor(props) {
    super(props);

    this.handleArchive = this.handleArchive.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.props.onEditClick;
  }

  handleArchive(e) {
    console.log("Archive ", this.id);
  }

  handleDelete(e) {
    const id = this.props.note.id;
    store.dispatch(
      noteDeleted({
        id,
      })
    );
  }

  render() {
    return (
      <div className="col-2 controls">
        <img src="img/edit.svg" alt="edit" onClick={this.handleEdit} />
        <img src="img/doc.svg" alt="archive" onClick={this.handleArchive} />
        <img src="img/delete.svg" alt="delete" onClick={this.handleDelete} />
      </div>
    );
  }
}

export default NoteControls;
