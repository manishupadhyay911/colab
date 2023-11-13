import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import TextEditor from './TextEditor.jsx'
function App() {
  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='documents/' element={<TextEditor/>}>
          <Route path=':id' element={<TextEditor/>}/>
        </Route>
  
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
