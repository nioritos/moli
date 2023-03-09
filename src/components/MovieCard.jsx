import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa'
import '../css/MovieCard.css';

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const apiImg = import.meta.env.VITE_IMG;
const apiSearch = import.meta.env.VITE_SEARCH;
const MovieCard = ({ movie, showDetails }) => {
    return (
        <div className="content-movies">
            <div className="movie" key={movie.id}>
                <img src={apiImg + movie.poster_path} alt={movie.original_title} />
                <div className="movie-info">
                    <h3>{movie.original_title}</h3>
                    <h3><FaStar />{movie.vote_average}</h3>
                </div>
                {showDetails ? (<Link to={`movie/${movie.id}`}>Detalhes</Link>) : false}
            </div>
        </div>
    )

}

export default MovieCard