import React from "react";

class NoteControls extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.note.id;

    this.handleArchive = this.handleArchive.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.props.onEditClick;
  }

  handleArchive() {
    console.log("Archive ", this.id);
  }

  handleDelete() {
    console.log("Delete ", this.id);
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
