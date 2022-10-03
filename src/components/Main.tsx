import React from 'react'
import './Main.css';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Main = ({ activeNote }:any, { onUpdateNotes }:any) => {
  const onEditNote = (key:string, value:string) => {
    onUpdateNotes({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return (
      <div className='no-active-note'>
        <img className='no-active-note-image' src="/7591_color.png" alt="" />
        <p>
          ノートが選択されていません
        </p>
      </div>
    )
  }

  return (
    <div className='app-main'>
      <div className="app-main-note-edit">
        <input type="text" value={activeNote.title} onChange={(e)=> onEditNote("title", e.target.value)} />
        <textarea id="" placeholder='ノート内容を記入' value={ activeNote.content } onChange={(e)=> onEditNote("content", e.target.value)} ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
          <ReactMarkdown className="markdown-preview">{ activeNote.content }</ReactMarkdown>
      </div>
    </div>
  )
}

export default Main