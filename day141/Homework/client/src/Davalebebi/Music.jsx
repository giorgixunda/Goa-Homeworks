import React, { useEffect, useState } from "react"

export default function Music() {
  const [data,setData] = useState([])
  const http = "http://localhost:5000/Music"
  useEffect(() => {
    fetch(http)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <p>{data.titleMusic}</p>
      <p>{data.firstMusic}</p><br />
    </div>
  )
}
