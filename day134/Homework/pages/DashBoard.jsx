import React from 'react'
import { Route,Routes,Link,Outlet } from 'react-router-dom'
import ShuaQalaqi from './ShuaQalaqi'
import Filmi from './Filmi'
import Qerchi from './Qerchi'
import Seriali from './Seriali'
export default function DashBoard() {
  return (
    <>
        <div>        
            <Link to={"ShuaQalaqshi"}>ShuaQalaqshi</Link><br />
            <Link to={"Filmi"}>Filmi</Link><br />
            <Link to={"Qerchi"}>Qerchi</Link><br />
            <Link to={"Seriali"}>Seriali</Link><br />
        </div>
        <Routes>
            <Route path='ShuaQalaqshi' element= {<ShuaQalaqi/>} />
            <Route path='Filmi' element= {<Filmi/>} />
            <Route path='Qerchi' element= {<Qerchi/>} />
            <Route path='Seriali' element= {<Seriali/>} />
        </Routes>
        <Outlet/>
    </>
  )
}
