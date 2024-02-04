import React from 'react'
import Hero from '../components/hero/Hero'
import Movies from '../components/movies/movies';
function Home({movies}) {
    console.log(movies);
  return (
    <div>
        <Hero movies={movies}></Hero>
        <Movies movies={movies}></Movies>
       
    </div>
    
  )
}

export default Home