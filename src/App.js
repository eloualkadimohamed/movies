import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import api from './api/axiosConfig'
import Layout from './components/layout';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home'
import Header from './components/header/header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/reviews';
import Movie from './components/movie/movie';
function App() {
  const [movies,setMovies]=useState();
  const [movie,setMovie]= useState()
  const [reviews,setReviews]=useState()
  const getMovies=async()=>{
    try{
      const response=await api.get("/api/v1/movies")
      console.log(response.data);
      setMovies(response.data)
    }catch(err){
      console.log(err);
    }
   
  }
  const getMovieData=async(movieId)=>{
    console.log(movieId);
    try{
      const response= await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie= response.data;
      setMovie(singleMovie)
      console.log(singleMovie);
      setReviews(singleMovie.reviewIds)
    }catch(err){
      console.log("Error in getting movie data",err);
    }
  }
  useEffect(() => {
    getMovies();
    }, []);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home movies={movies}/>}></Route>
          <Route path='/trailer/:ytTrailerId' element={<Trailer></Trailer>}></Route>
          <Route path='/reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}></Reviews>}></Route>
          <Route path='/movies/:movieId' element={<Movie getMovieData={getMovieData} movie={movie}></Movie>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
