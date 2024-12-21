import React from 'react'
import { Link } from 'react-router-dom';
export default function navbar() {
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
        {navlist.map((item,index) => (
          <li key={`_NavLinks_${index}`}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
