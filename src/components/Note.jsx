import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handler() {
    props.del(props.id);
    // console.log("something");
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handler}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
