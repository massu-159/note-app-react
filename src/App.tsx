import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  const onAddNote = () => {
    console.log("newNote")
  }

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote}/>
      <Main />
    </div>
  )
}

export default App
