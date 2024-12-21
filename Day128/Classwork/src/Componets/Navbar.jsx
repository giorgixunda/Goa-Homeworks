import React from 'react'
import { Link } from 'react-router-dom';
export default function navbar() {
    const navlist = [
        {
        path: "/",
        name:"home page"
        },
        {
          path: "/Books",
          name:"Books"
        },
        {
          path: "/BooksNew",
          name:"hehe"
        },
        {
            path:"/Book/module",
            name:"BookModule"
        },
        {
            path:"/books/new/page",
            name:"BooksNewPage"
        },
        {
          path:"/lomebi",
          name:"lomebi"
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
