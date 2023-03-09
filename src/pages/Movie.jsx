import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MovieCard from "../components/MovieCard";
const api = process.env.VITE_API
const apiKey = process.env.VITE_API_KEY
import {
  BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill, BsTypeH1
} from "react-icons/bs";
import axios from "axios";

const Movie = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(false)
  const getMovie = async (url) => {
    try {
      const response = await axios.get(url);
      setMovie(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(
    () => {
      getMovie(`${api}${id}?${apiKey}`)
    }, []
  )

  const formatCurrency = currency => {
    return currency.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"

    })
  }

  return (
    <>
      {movie ? (
        <div className="container-movie-card">
          <div className="content-card">
          <MovieCard movie={movie} showDetails={false}/>
            <div className="specs-movie">
            <div className=" general-info">
            <div className="genres">
                <h3>Genres:</h3>
               <div className="genres-names">
               {movie.genres.map((x) => {
                  return <p>{x.name}</p>
                })}
               </div>
              </div>
            </div>
            <div className="general-info">
              <h3>
                <BsHourglassSplit /> Duration:
              </h3>
                <p>{movie.runtime} minutes</p>
            </div>
            <div className="general-info">
              <h3>
                <BsWallet2 /> Budget:
              </h3>
                <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="general-info">
              <h3>
                <BsGraphUp /> Revenue:
              </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            </div>
          </div>
        </div>

      ) : (
false      )}
    </>

  )
}

export default Movie