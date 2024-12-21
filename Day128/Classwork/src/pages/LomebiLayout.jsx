import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export default function LomebiLayOut() {
  const navlist = [
    {
      path:"new",
      name:"lomebi new"
    },
    {
      path:"book",
      name:"book"
    },
    

  ]
  return (
    <div>
      <ul>
        <h1>LomebiLayOut</h1>
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
