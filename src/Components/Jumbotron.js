import React from 'react';

const Jumbotron = props => {
    let imageURL;
    if (props.one.results) {
        let movie_poster = props.one.results[0].poster_path;
        imageURL = "https://image.tmdb.org/t/p/original" + movie_poster;
    }
    return (
        <div>

            {props.one.results ?
                (<div>
                    <h1>{props.one.results[0].title}</h1>
                    <p>{props.one.results[0].overview}</p>
                    <img src={imageURL} alt="movie poster" />
                </div>) : (<h1>Put something here for splash screen</h1>)
            }
        </div>
    )
}

export default Jumbotron;