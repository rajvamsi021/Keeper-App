import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handler(e) {
    e.preventDefault();
    props.gT(title);
    setTitle("");
    props.gC(content);
    setContent("");
    // props.add();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={handler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
