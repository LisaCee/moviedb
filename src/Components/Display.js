import React from 'react';

const Display = props => {
    console.log('PROPS', props.movie.results)
    return (
        <div>
            {props.movie.results && props.movie.results.map((movie, id) => {
                return (
                    <div key={id}>
                        <h1 key={id}>{movie.title}</h1>
                        <img src="{movie.poster_path}" alt="movie poster"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Display;