import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';


const api = process.env.VITE_API;
const apiKey = process.env.VITE_API_KEY;
const apiImg = process.env.VITE_IMG;
const apiSearch = process.env.VITE_SEARCH;

import '../css/MovieCard.css'




const Search = () => {
  const [searchParam] = useSearchParams();
  console.log( useSearchParams())

  const [searchedMovies, setSearchedMovies] = useState([]);
  const query = searchParam.get('q');

  const getMovies = async (url) => {
    try {
      const response = await axios.get(url);
    console.log(response.data.results)
    setSearchedMovies(response.data.results);
    } catch {
      alert("doesn't exist")
    }
  };

  useEffect(
    () => {
      getMovies(`${apiSearch}?${apiKey}&query=${query}`)
    }, [query]
  )

  return (

    <div className='container'>

      <h1>{`Results for: ${query}`}</h1>
      <div className="content-movies">

      {searchedMovies?.map((movie, key) => {
          return (
              <div className="movie" key={key}>
                <img src={apiImg + movie.poster_path} alt={movie.original_title} />
                <div className="movie-info">
                  <h3>{movie.original_title}</h3>
                  <h3><FaStar />{movie.vote_average}</h3>
                </div>
                <Link to={`../movie/${movie.id}`}>Detalhes</Link>
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default Search