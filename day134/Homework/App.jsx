import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import DashBoard from './pages/DashBoard'
import Home from './pages/Home'
export default function FoodApp() {
  return (
    <>
      <div>
          <Link to={"/dashboard"}>dashboard</Link><br />
          <Link to={"/"}>Home</Link><br />
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard/*' element={<DashBoard/>}/>
        </Routes>
    </>
  )
}
