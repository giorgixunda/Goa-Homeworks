import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import PagesLayout from './pages/PagesLayout'
// import PageOne from './pages/PageOne'
import Pages from './pages/Pages'
import DashBoard from './pages/DashBoard'
export default function FoodApp() {
  return (
    <>
      <div>
          <Link to={"/"}>Home</Link><br />
          <Link to={"/login"}>Login</Link><br />
          <Link to={"/pagesLayout"}>pagesLayout</Link><br />  
          <Link to={"/dashboard"}>dashboard</Link><br />
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/pagesLayout' element={<PagesLayout/>}>
              <Route path=':pageId' element={<Pages/>}/>
          </Route>
          <Route path='/dashboard/*' element={<DashBoard/>}/>
        </Routes>
    </>
  )
}
