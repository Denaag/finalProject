import React from "react";
import AddStarRating from "./Rating";
import RateThisFilm from "./RateFilm";

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            
            </div>

            <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg'} alt={movie.Title}/>
            </div>

            <div className="rating">
            
            <RateThisFilm />
            {/* <AddStarRating /> */}
            </div>

        </div>
    );
}

export default MovieCard;