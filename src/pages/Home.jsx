import React, { useState } from 'react'
import { useEffect } from 'react'

const api = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=ffe25bc45b7e8096d40d115c27f17f70";
const apiImg = "https://image.tmdb.org/t/p/w500";
const apiSearch = "https://api.themoviedb.org/3/search/movie";
import axios from 'axios';

import MovieCard from '../components/MovieCard';

const Home = () => {
  const [topMovies, setTopMovies] = useState([])


  const getTopMovies = async (url) => {
    const response = await axios.get(url);
    setTopMovies(response.data.results)
  };


  useEffect(
    () => {
      getTopMovies(`${api}top_rated?${apiKey}`)
    }, [])

  return (
    <div className='container'>
      <h1>Top Movies</h1>
      <div className="content-movies">

        {
          topMovies ? topMovies.map((movie, index) => {
            return (
              <MovieCard movie={movie} showDetails={true} key={index} />
            )
          }) : <h1>LOADING MOVIES...</h1>
        }
      </div>
    </div>
  )
}

export default Home