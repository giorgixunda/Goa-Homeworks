import React, { useEffect } from 'react'
import gsap from "gsap"
export default function App() {
  useEffect(() => {
  gsap.to(".text-animation",{
    duration: 5,
    y:"50vh",
    x:"50vw",
    xPrecent: -100,
    yPercent:-50,
    rotate:360,
    yoyo:true,
    repeat:-1,
    stagger:1,
    opacity:0
  })
  }, [])
  return (
    <div className='bg-orange-500 h-screen  block'>
      <div className='text-animation size-50 bg-orange-700 rounded-2xl opacity-100'/>
      <div className='text-animation size-50 bg-orange-700 rounded-2xl opacity-100'/>
      <div className='text-animation size-50 bg-orange-700 rounded-2xl opacity-100'/>
    </div>
  )
}
