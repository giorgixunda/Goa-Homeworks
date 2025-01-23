import React, { useEffect, useState } from "react"

export default function Image() {
  const [data,setData] = useState([])
  const http = "http://localhost:5000/Image"
  useEffect(() => {
    fetch(http)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h1>{data.titleImage}</h1> <br />
      <img src="https://tse2.mm.bing.net/th?id=OIP.GHSFSZDRr1Rxd0_SdF6rbgHaE8&pid=Api&P=0&h=220" alt="" />
    </div>
  )
}
