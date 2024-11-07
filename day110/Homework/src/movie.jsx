import React from 'react'

const movie = () => {
    const movies = [{title: "First Blood", description:"First Blood is a 1982 American action film directed by Ted Kotcheff"}]
    return(
        <div>
            <h1>Movie</h1>
            <ul>
                {movies.map((movie,index) => (
                    <li key={index}>
                        <p>movie.title</p>
                        <p>movie.description</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default movie
