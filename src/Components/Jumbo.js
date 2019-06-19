import React from "react";
import "../styles/jumbo.css";
import Splash from "./Splash";

const Jumbo = props => {
  let imageURL;
  let defaultPosterURL =
    "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  if (props.one.results) {
    let backdropImg = props.one.results[0].backdrop_path;
    imageURL = "https://image.tmdb.org/t/p/w1280" + backdropImg;
  }
  return (
    <div>
      {props.one.results ? (
        <div className="container">
          <div className="image_container">
            {imageURL.includes(null) ? (
              <img src={defaultPosterURL} alt="movie poster" />
            ) : (
              <img src={imageURL} alt="movie poster" />
            )}

            <div className="title_card">
              <div className="text_year">{props.year}</div>
              <h1 className="text_title">{props.one.results[0].title}</h1>
              <p>{props.one.results[0].overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <Splash />
      )}
    </div>
  );
};

export default Jumbo;
