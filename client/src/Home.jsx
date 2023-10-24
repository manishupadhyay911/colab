import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid"
function Home() {

    // const routeHandler=()=>{
    //     const navigate = useNavigate();
    //     console.log("here")
    //     navigate(`/documents/${uuidV4()}`);
    // }
  return (
    <div>
        <button><Link to={`/documents/${uuidV4()}`}>create new room</Link></button>
    </div>
  )
}

export default Home