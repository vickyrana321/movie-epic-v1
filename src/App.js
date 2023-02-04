import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import Home from './components/home/Home'
import { useState,useEffect } from 'react';
import { Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  console.log(reviews);
  const getMovies = async () =>{
  
    try
    {

      const response = await api.get("/api/v1/movies");

      console.log(response.data);
      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  //requesting movie as per ImdbId

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;
        console.log("res is");
        console.log(response.data.reviews);

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        // console.log(singleMovie.setReviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }



  useEffect(() => {
    getMovies();
  },[])// when the app component is loaded it gets executed

  return (
    <div className="App">
      {<Header/> }
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home movies={movies} />}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
