import Nota from "./Note";
const notes = [
  {
    id: 13,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 27,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 38,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

export default function App() {
  return (
    <div>
      {notes.map((note) => {
        return <Nota content={note.content} key={note.id} />;
      })}
    </div>
  );
}
