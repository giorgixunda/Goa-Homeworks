import React from 'react'
import {Link,Outlet} from "react-router-dom"
export default function Pages() {
  return (
    <div>
    <>
        <div>
            <Link to={"/pagesLayout/Page0"}>page1</Link>
            <Link to={"/pagesLayout/Page1"}>page2</Link>
            <Link to={"/pagesLayout/Page2"}>page3</Link>
            <h1>Welcome to the Seahorse World</h1>
        </div>        
        <Outlet/>
    </>
    </div>
  )
}
