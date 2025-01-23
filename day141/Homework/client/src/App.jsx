import React, { useEffect, useState } from "react"
import Filmebi from "./Davalebebi/Filmebi.jsx"
import Music from "./Davalebebi/Music.jsx"
import Image from "./Davalebebi/Image.jsx"
import FacebookUser from "./Davalebebi/FacebookUser.jsx"
export default function App() {
  return (
    <div>
      <Filmebi/>
      <Music/>
      <Image/>
      <FacebookUser/>
    </div>
  )
}
