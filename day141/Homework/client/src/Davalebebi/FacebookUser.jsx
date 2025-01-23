import React, { useEffect, useState } from "react"

export default function Image() {
  const [data,setData] = useState([])
  const http = "http://localhost:5000/FacebookUser"
  useEffect(() => {
    fetch(http)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <img className="w-[150px] h-[150px] rounded-full" src="https://tse3.mm.bing.net/th?id=OIP.g-PMKXEGdnEU8sBg9_X8uwHaHa&pid=Api&P=0&h=220" alt=""/>
      <p>{data.User}</p>
    </div>
  )
}
