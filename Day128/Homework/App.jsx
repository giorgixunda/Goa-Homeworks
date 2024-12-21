import React from 'react'
import Filmebze from './Filmebze'
import Qerchi from './Qerchi'
import Serialebi from './Serialebi'
import ShuaQalaqshi from './ShuaQalaqshi'
import {Route, Routes} from 'react-router-dom'
import LayOut from './Layout'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path = "/Filmebze" element = {<Filmebze/>}/>
        <Route path = "/Qerchi" element = {<Qerchi/>}/>
        <Route path = "/Serialebi" element = {<Serialebi/>}/>
        <Route path = "/ShuaQalaqshi" element = {<ShuaQalaqshi/>}/>

        <Route path='/LayOut' element = {<LayOut/>}>
            <Route path = "/Filmebze" element = {<Filmebze/>}/>
            <Route path = "/Qerchi" element = {<Qerchi/>}/>
            <Route path = "/Serialebi" element = {<Serialebi/>}/>
            <Route path = "/ShuaQalaqshi" element = {<ShuaQalaqshi/>}/>
        </Route>
      </Routes>
    </div>
  )
}
