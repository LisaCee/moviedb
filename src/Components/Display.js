import React from 'react';

const Display = props => {
    console.log('PROPS', props.movie.results)
  
    
    
    return (
        <div>
            {props.movie.results && props.movie.results.map((movie, id) => {
                let movie_poster = movie.poster_path.toString();
                let imageURL="https://image.tmdb.org/t/p/w500" + movie_poster;
                console.log(imageURL)
                return (
                    <div key={id}>
                        <h1 key={id}>{movie.title}</h1>
                      
                        <img src= {imageURL} alt="movie poster"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Display;