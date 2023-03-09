import React, { useState } from 'react'
import { useEffect } from 'react'

const api = process.env.VITE_API;
const apiKey = process.env.VITE_API_KEY;
const apiImg = process.env.VITE_IMG;
const apiSearch = process.env.VITE_SEARCH;
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