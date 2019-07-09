import React from "react";
import "../styles/display.css";
import { Container, Row, Col } from "react-bootstrap";

const Display = props => {
  console.log('PROPS',props)
  let others;
  let defaultPosterURL =
    "https://images.unsplash.com/photo-1545129139-1beb780cf337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
  if (props.movie.results) {
    others = props.movie.results.slice(1);
  }

  return (
    <Container>
      <div className="movie_results">
        <Row>
          {props.movie.results &&
            others.map((movie, id) => {
              let movie_poster = movie.poster_path;
              let imageURL = "https://image.tmdb.org/t/p/w342" + movie_poster;
              return (
                <Col
                  sm={{ span: 10, offset: 1 }}
                  md={{ span: 6, offset: 0 }}
                  lg="4"
                  key={id}
                >
                  <div className="movie">
                    {imageURL.includes(null) ? (
                      <img
                        src={defaultPosterURL}
                        className="img-fluid poster defaultPoster"
                        alt="movie poster"
                      />
                    ) : (
                        <img
                          src={imageURL}
                          className="img-fluid poster"
                          alt="movie poster"
                        />
                      )}

                    <h1 id="movie_titles" key={id}>
                      {movie.title}
                    </h1>
                  </div>
                </Col>
              );
            })}
          {props.page === 1 ? null : props.movie.total_pages > props.page +1 ? ( <button onClick={props.click} id="moreButton"><i className="far fa-arrow-alt-circle-right fa-2x"></i></button>
): null}
         
        </Row>
      </div>
    </Container>
  );
};

export default Display;