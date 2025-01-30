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
  return (
    <div className=' text-white bg-blue-500 dark:bg-black text-2xl flex  justify-between'>
      {/* <p>lomi</p> */}
      <h1>hello world</h1>
      <div onClick={() => handleDarkMode()} className='cursor-pointer relative'>
        <Moon size={30} color='white' className='top-0 right-0 absolute hidden dark:block'/>
        <Sun size={30} className='dark:hidden'/>
      </div>
    </div>
  )
}
