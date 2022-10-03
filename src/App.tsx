import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid';
import { Note } from './interfaces/Note'

function App() {
  const [notes, setNotes] = useState<any>(JSON.parse(localStorage.getItem("notes") as string) || []);
  const [activeNote, setActiveNote] = useState<Note | boolean>(false);

  useEffect(() => { 
    // ローカルストレージにノートを保存
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => { 
    // ロード時、最初のノートを選択した状態にする
    setActiveNote(notes[0].id);
  }, []);

  const onAddNote = () => {
    const newNote = {
      id:  uuid(),
      title: "new Note",
      content: "new Note content",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id:string) => {
    const filterNotes = notes.filter((note:Note) => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note:any) => note.id === activeNote)
  };

  const onUpdateNotes = (updatedNote:Note) => {
    // 修正された新しいノートの配列を返す
    const updatedNotesArray = notes.map((note:Note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        activeNote={getActiveNote()}
        onUpdateNotes={onUpdateNotes}
      />
    </div>
  )
};

export default App
