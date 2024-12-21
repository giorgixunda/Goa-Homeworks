import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Books from './pages/Books.jsx'
import Home from './pages/Home.jsx' 
import NotFound from './pages/NotFound.jsx'
import BooksNew from './pages/BooksNew.jsx'
import Navbar from './Componets/navbar.jsx'
import Module from './pages/module.jsx'
import BooksNewPage from './pages/BooksNewPage.jsx'
import BooksId from './pages/BooksId.jsx'
import Lomebi from './pages/Lomebi.jsx'
import LomebiLayOut from './pages/LomebiLayout.jsx'
import LomebiNew from './pages/LomebiNew.jsx'
export default function App (){
  return (
    <div>
      <Navbar/>
      <br/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/books" element = {<Books/>}/>
        <Route path='*' element = {<NotFound/>}/>
        <Route path="/BooksNew" element = {<BooksNew/>}/>
        <Route path='/Book/module' element = {<Module/>}/>
        <Route path='/books/new/page' element = {<BooksNewPage/>}/>
        <Route path='/books/:id' element = {<BooksId/>}/>
        <Route path='/lomebi' element = {<LomebiLayOut/>}>
          <Route path='new' element={<LomebiNew/>}/>
          <Route path = "book" element = {<Books/>}/>
        </Route>
      </Routes>



      <footer>
        <p>&copy; ;-;</p>
      </footer>
    </div>
  )
}
