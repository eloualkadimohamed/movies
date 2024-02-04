import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { constant } from 'lodash'
import Button  from 'react-bootstrap/Button'
function Hero({movies}) {
    const navigate= useNavigate();
    function reviews(movieId){
        navigate(`/reviews/${movieId}`)
    }
  return(
    <div className="movie-carousel-container">
        <Carousel style={{'height':'400px'}}>
                {movies?.map((movie)=>{
                    console.log(movie.backDrops[0]);
                    console.log(movie.trailerLink);
                return<Paper key={movie.imdbId}>
                <div className='movie-card-container'>
                    <div className='movie-card' style={{"--img":`url(${movie?.backDrops[0]})`}}>
                        <div className='movie-detail'>
                            <div className='movie-poster'>
                                <img src={movie.poster} alt=''></img>
                            </div>
                            <div className='movie-title'>
                                <h4>{movie.title}</h4>
                            </div>
                            <div className='movie-buttons-container'>
                                <Link to={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                <div className='play-button-icon-container'>
                                    <FontAwesomeIcon
                                    className='play-button-icon' icon={faCirclePlay}></FontAwesomeIcon>
                                </div>
                                </Link>
                                <div>
                                    <Button variant='info' onClick={()=>reviews(movie.imdbId)}></Button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </Paper>
                })}
        </Carousel>   
    </div>
    
   
  )
}

export default Hero
