import React from 'react'
import { useNavigate,Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <button><Link to={`/`}>Home</Link></button>
    </div>
  )
}

export default Navbar