import React from 'react'
import './movies.css'
import { Link } from 'react-router-dom'
function Movies({movies}) {
  return (
    <div className='movies-container'>
        {
            movies?.map((m)=>{
                return <Link to={`/movies/${m.imdbId}`} className='movie'>
                    <img src={m.poster} alt="" className='image'/>
                    <p key={m.id}>{m.title}</p>
                </Link>
            })
        }
        </div>
  )
}

export default Movies