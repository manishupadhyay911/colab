
import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Route,Routes,
  Navigate,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={`/documents/${uuidV4()}`} />}/>
        <Route path="/documents/:id" element={<TextEditor />}/>
      </Routes>
    </Router>
   
  )
}

export default App
