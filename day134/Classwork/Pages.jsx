import React from 'react'
import {useParams} from "react-router-dom"
export default function Pages() {
    const { pageId } = useParams()
    const movies = ["firstmovie","secondmovie","thirdmovie"]
  return (
    <div>
        Page{pageId}{movies[pageId]}
    </div>
  )
}
