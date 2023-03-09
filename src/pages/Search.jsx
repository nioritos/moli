import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';


const api = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=ffe25bc45b7e8096d40d115c27f17f70";
const apiImg = "https://image.tmdb.org/t/p/w500";
const apiSearch = "https://api.themoviedb.org/3/search/movie";

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