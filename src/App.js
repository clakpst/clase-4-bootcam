import { useState } from "react";
import Nota from "./Note";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random <= 0.5,
    };
    setNotes([...notes, noteToAddToState]);
    setNewNote("");
  };
  return (
    <div>
      <h1>Notas</h1>
      {notes.map((note) => {
        return <Nota content={note.content} key={note.id} />;
      })}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </div>
  );
}
