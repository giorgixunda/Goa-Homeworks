// import React from 'react'
// import gsap from "gsap"
// import { useEffect } from 'react'
// export default function App() {
//   useEffect(() => {
//     gsap.to(".turtle",{
//       duration: 5,
//       x:"43vw",
//       xPrecent: -50,
//     })
//     gsap.to(".turtle1",{
//       duration: 5,
//       x:"50vw",
//       xPrecent: -50,
//     })
//     gsap.to(".turtle2",{
//       duration: 5,
//       x:"50vw",
//       xPrecent: -50,
//     })
//   }, [])
//   return (
//     <div className='h-screen block size-72'>
//       <h1 className='turtle'>Hello This Website Is About Turtles!</h1>
//       <h1 className='turtle1'>⬇️</h1>
//       <div className='turtle2'>🐢</div>
//     </div>
//   )
// }

// import React from 'react'
// import gsap from "gsap"
// import { useEffect } from 'react'
// export default function App() {
//   useEffect(() => {
//     gsap.to(".Travelagency",{
//       duration: 3,
//       x:"43vw",
//       xPrecent: -50,
//     })
//     gsap.to(".Travelagency1",{
//       duration: 3,
//       x:"50vw",
//       xPrecent: -50,
//     })
//     gsap.to(".Travelagency2",{
//       duration:3,
//       x:"50vw",
//       xPrecent: -50,
//       opacity: 0,
//     })
//     gsap.to(".Travelagency3",{
//       duration:3,
//       x:"50vw",
//       y:"-1vw",
//       xPrecent: -50,
//       yPercent:-50,
//       opacity: 1,
//     })
//     gsap.to(".Travelagency4",{
//       duration:3,
//       x:"49vw",
//       y:"-1vw",
//       xPercent: -50,
//       yPercent:-50,
//       opacity: 1,
//     })
//   }, [])
//   return (
//     <div className='block size-80'>
//       <h2 className='Travelagency'>Hello This Website Is About Travel Agency!</h2>
//       <h1 className='Travelagency1'>Purchase</h1>
//       <h1 className='Travelagency2'>Price</h1>
//       <h1 className='Travelagency3 opacity-0'>Price is 10$</h1><br />
//       <button className='Travelagency4 bg-orange-500 w-[100px] h-[30px] rounded-sm cursor-pointer text-white'>Travel</button>
//     </div>
//   )
// }

import React from 'react'
import gsap from "gsap"
import { useEffect } from 'react'
export default function App() {
  useEffect(() => {
    gsap.to(".Gamingstore",{
      duration:3,
      x:"50vw",
      y:"40vh",
      yPercent:-50,
      xPercent:-50,
      opacity:1,
    })
  }, [])
  return (
    <div>
      <nav className='flex bg-orange-500 text-white justify-around'>
        <h1>Gaming store</h1>
        <ul className='flex gap-[40px]'>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Store</li></a>
        </ul>
        <h1>BatMan</h1>
      </nav>
      <div className='Gamingstore  opacity-0'>
        <div className=' bg-green-600 w-[250px] h-[265px] Gamingstore  text-white'>
          <img src="https://wallpaperaccess.com/full/172265.jpg" alt=""/>
          <h1>Game Name: Batman</h1>
          <p>Price:0$</p>
          <button className='bg-orange-500 w-[100px] h-[30px] rounded-sm cursor-pointer text-white'>Purchase</button>
        </div>
      </div>
    </div>
  )
}


