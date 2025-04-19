import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route, useLocation, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Sidebar from './Page/Sidebar'
import Login from './Page/Login'
import Myprofile from './Page/Myprofile'
import GetMyprofile from './Hooks/GetMyprofile'
import GetAllpost from './Hooks/GetAllpost'
import { useDispatch, useSelector } from 'react-redux'
import Allpost from './Page/Allpost'

function App() {

  return (
    <>

 <div>
   cccc
  <GetMyprofile/>
 </div>
    
  <div>

  <Routes>
    <Route  path="/home" element={<GetAllpost />} />
    <Route  path="/login" element={<Login/>} />
    <Route  path="/profile" element={<Myprofile />} />


  </Routes>  
  </div>
  

    </>
  )
}

export default App
