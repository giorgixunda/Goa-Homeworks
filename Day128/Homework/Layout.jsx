import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export default function LayOut() {
  const navlist = [
    {
      path:"/Filmebze",
      name:"Filmebze"
    },
    {
      path:"/Qerchi",
      name:"Qerchi"
    },
    {
      path:"/Serialebi",
      name:"Serialebi"
    },
    {
      path:"/ShuaQalaqshi",
      name:"ShuaQalaqshi"
    },
    

  ]
  return (
    <div>
      <ul>
        <h1>LayOut</h1>
        {navlist.map((item,index) => (
          <li key={`_NavLinks_${index}`}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  )
}