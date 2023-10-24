import TextEditor from "./TextEditor"
import Navbar from "./Navbar"
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,Routes,
  Navigate,Link
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import './App.css'

function App() {

  return (
    <>
      
      <Router>
      <Routes>
      
        {/* <Route path="/" element={<Navigate replace to={`/documents/${uuidV4()}`} />}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/documents/:id" element={<TextEditor />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
