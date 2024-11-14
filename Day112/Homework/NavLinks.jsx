import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
export default function NavLinks(){
  const navLinks = [
    {
      li:"Abouts"
    },
    {
      li:"contacts"
    },
    {
      li:"service"
    },
    {
      li:"FAQS"
    },
  ]
  const [click, setClick] = useState(false)
  const handleClick = () =>{
    setClick(!click)
  }
  return (

    <div className='bg-black text-white'>
      <div className='container flex justify-between'>
        {/* 
          sm
          md
          lg
          xl
          2xl
          4xl
        */}
        <a href="#" className='lg:text-2xl text-xl'>იხვის ტოლმა</a>
        <nav>
          <div className='sm:hidden flex text-2xl cursor-pointer'>
            <FaBars onClick ={() => handleClick()} className={`${click && "hidden"}`}/>
            <FaBarsStaggered onClick ={() => handleClick()} className={`${!click && "hidden"}`}/>
          </div>
          {/* Desktop */}
          <ul className='sm:flex hidden  gap-2 lg:text-2xl text-xl'>
            {
              navLinks.map((item, index) => (
                <li key={`_nav--link-${index}`}><a href="#" className='hover:text-black/40'>{item.li}</a></li>
              ))}
          </ul>
          {/* Mobile */}
          <div className='relative'><ul className={`z-[99] transition-all ${click ? "translate-x-0" : "translate-x-[500px]"} sm:hidden flex gap-2 lg:text-2xl text-xl absolute top-1 right-0 text-black flex-col bg-slate-200 p-2  text-center`}>
            
              {
                navLinks.map((item, index) => (
                  <li key={`_nav--link-${index}`} className='hover:text-black/50' ><a href="#">{item.li}</a></li>
                ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className='hero-section bg-emerald-300 h-screen ' style={{
        backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.7CFG20QgfkObbyXfwI7GgAHaFD&pid=Api&P=0&h=220)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
            <div className='sm:hidden'>
              <section className='flex justify-center items-center'>
                  <h1 className='sm:text-xl'>Hello Mobile Users</h1>
              </section>
            </div>  
            <section className='hidden sm:flex justify-center items-center'>
                <h1 className='text-white max-w-[641px]'>Hello Pc Users</h1>
            </section>
      </div>
    </div>
  )
}