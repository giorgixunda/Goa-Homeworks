import React, { useEffect, useState } from "react"

export default function Filmebi() {
  const [data,setData] = useState([])
  const http = "http://localhost:5000/filmebi"
  useEffect(() => {
    fetch(http)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      {data.title} <br />
      {data.first} <br />
      {data.second} <br />
      {data.third} <br />
      {data.fourth} <br />
    </div>
  )
}
