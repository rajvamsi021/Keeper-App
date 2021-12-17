import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import './styles.css'

function App() {
  const [notesTitle, setNotesTitle] = useState("");
  const [notesContent, setNotesContent] = useState("");
  const [notes, setNotes] = useState([]);

  function getTitle(x) {
    setNotesTitle(x);
    // console.log(notesTitle);
  }

  function getContent(x) {
    setNotesContent(x);
    // console.log(notesContent);
  }

  useEffect(() => {
    if (notesTitle !== "" && notesContent !== "") {
      setNotes([...notes, { ti: notesTitle, co: notesContent }]);
    }
  }, [notesTitle, notesContent]);

  // function addNotes() {
  //   setNotes([...notes, { ti: notesTitle, co: notesContent }]);
  // }

  function deleteNote(id) {
    return setNotes(
      notes.filter((task, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea gT={getTitle} gC={getContent} />
      {notes.map((item, index) => (
        <Note
          key={index}
          del={deleteNote}
          id={index}
          title={item.ti}
          content={item.co}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
