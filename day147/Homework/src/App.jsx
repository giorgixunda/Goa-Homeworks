import React, { useState } from 'react'
import { Sun,Moon } from 'lucide-react'
export default function App() {
  const [isDark, setIsDark] = useState(false)
  const handleDarkMode = () => {
    setIsDark(!isDark)
    console.log(isDark)
    if(isDark){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  }
  const [isBlue, setIsBlue] = useState(false)
  const handleBlueMode = () => {
    setIsBlue(!isBlue);
    console.log(isBlue)
    if(isBlue){
      document.documentElement.classList.add("blue")
    }
    else{
      document.documentElement.classList.remove("blue")
    }
  }
  const [isGreen, setIsGreen] = useState(false)
  const handleGreenMode = () => {
    setIsGreen(!isGreen);
    console.log(isGreen)
    if(isGreen){
      document.documentElement.classList.add("green")
    }
    else{
      document.documentElement.classList.remove("green")
    }
  }
  const [isOrange, setIsOrange] = useState(false)
  const handleOrangeMode = () => {
    setIsOrange(!isOrange);
    console.log(isOrange)
    if(isOrange){
      document.documentElement.classList.add("orange")
    }
    else{
      document.documentElement.classList.remove("orange")
    }
  }
  const [isEmerald, setIsEmerald] = useState(false)
  const handleEmeraldMode = () => {
    setIsEmerald(!isEmerald);
    console.log(isEmerald)
    if(isEmerald){
      document.documentElement.classList.add("emerald")
    }
    else{
      document.documentElement.classList.remove("emerald")
    }
  }    
  return (
    <div>
      <h1 className='text-teal-400'>Hello This Is My Lighting Mode Portofilio</h1>
      <div className=' text-white emerald:bg-emerald-400 bg-white dark:bg-black blue:bg-blue-500 green:bg-green-500 orange:bg-orange-500 text-2xl flex w-screen h-screen justify-between'>
        {/* <p>lomi</p> */}
        <h1 className='bottom-[355px] left-[650px] absolute text-green-500 '>Iyideba</h1>
        <h1 className='text-green-500 bottom-[320px] left-[650px] absolute '>Fasi:Unknown$</h1>
        <img src="http://www.bimmertoday.de/wp-content/uploads/bmw-m5-e34-15.jpg" alt="" className='w-[250px] h-[150px] bottom-[150px] left-[620px] absolute'/>   
        <h1 className='text-green-500'>hello world</h1>
        <div onClick={() => handleDarkMode()} className='cursor-pointer relative h-[20px]'>
          <Moon size={30} color='white' className='top-0 right-0 absolute hidden dark:block'/>
          <Sun size={30} color='black'className='top-0 right-0 dark:hidden blue:hidden green:hidden orange:hidden emerald:hidden'/>
        </div><br />
        <div onClick={() => handleBlueMode()} className='cursor-pointer relative h-[20px]'>
          <Moon size={30} color='white' className='top-0 right-0 absolute hidden'/>
          <Sun size={30} color='black'className='top-0 right-0 dark:hidden orange:hidden green:hidden emerald:hidden'/>
        </div>
        <div onClick={() => handleGreenMode()} className='cursor-pointer relative h-[20px]'>
          <Moon size={30} color='white' className='top-0 right-0 absolute hidden'/>
          <Sun size={30} color='black'className='top-0 right-0 dark:hidden blue:hidden orange:hidden emerald:hidden'/>
        </div>
        <div onClick={() => handleOrangeMode()} className='cursor-pointer relative h-[20px]'>
          <Moon size={30} color='white' className='top-0 right-0 absolute hidden'/>
          <Sun size={30} color='black'className='top-0 right-0 dark:hidden blue:hidden green:hidden emerald:hidden'/>
        </div>
        <div onClick={() => handleEmeraldMode()} className='cursor-pointer relative h-[20px]'>
          <Moon size={30} color='white' className='top-0 right-0 absolute hidden'/>
          <Sun size={30} color='black'className='top-0 right-0 dark:hidden blue:hidden green:hidden orange:hidden'/>
        </div>
      </div>
    </div>
  )
}