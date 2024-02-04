import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel';
import { Link, useParams } from 'react-router-dom'
import './movie.css'
function Movie({movie,getMovieData,handlSubmit,revText,labelText,defaultValue}) {
    console.log(movie);
    const params=useParams();

  useEffect(()=>{
    getMovieData(params.movieId)
  },[])
  return (
    <div>
        <h1 className='h1'>{movie?.title}</h1>
        <div className='carousel-container'>
        <Carousel className='carousel'>
            {movie?.backDrops.map((img,index)=>(
                <Paper key={index}>
                    <div>
                        <img src={img} alt="" width={450} height={330}/>
                    </div>
                </Paper>
                
                ))}
        </Carousel>
        <div className='details'>
            <div>
                <h5>Release Date : </h5>
                <p>{movie?.releaseDate}</p>
            </div>

            <hr></hr>
            <div className='genres'>
                <h5>Genres :</h5>
                <div>
                    {
                        movie?.genres.map((g,indx)=>{
                            return <p key={indx}>{g}</p>
                        })
                    }
                    
                </div>
            </div>
            <Link className='Link' to={`/trailer/${movie?.trailerLink.substring(movie?.trailerLink.length - 11)}`}>Watch trailer</Link>
        </div>
        </div>
        <div className='reviews-container'>
            <div>
            <h4>Reviews</h4>
            {movie?.reviewIds.map((r,indx)=>{
                return <div key={indx}>
                    <p>{r.body}</p>
                    <hr></hr>
                </div>
            })
            }
            </div>
            <Link className='Link' to={`/reviews/${movie.imdbId}`}>add a review</Link>
        </div>
    </div>
  )
}

export default Movie