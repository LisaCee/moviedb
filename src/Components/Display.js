import React from 'react';

const Display = props => {
    let others;
    if (props.movie.results) {
        others = props.movie.results.slice(1);
    }
    
    return (
        <div>
            {props.movie.results && others.map((movie, id) => {
                let movie_poster = movie.poster_path.toString();
                let imageURL = "https://image.tmdb.org/t/p/w500" + movie_poster;
                return (
                    <div key={id}>
                        <h1 key={id}>{movie.title}</h1>

                        <img src={imageURL} alt="movie poster" />
                    </div>
                )
            })}
        </div>
    )

}

export default Display;