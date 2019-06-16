import React from 'react';
import "../styles/display.css";
import { Container, Row, Col } from "react-bootstrap";

const Display = props => {
    let others;
    if (props.movie.results) {
        others = props.movie.results.slice(1);
    }

    return (

        <div>
            <Container>
                <Row>
                    {props.movie.results && others.map((movie, id) => {
                        let movie_poster = movie.poster_path.toString();
                        let imageURL = "https://image.tmdb.org/t/p/w342" + movie_poster;
                        return (
                            <Col sm={{ span: 10, offset: 1 }} md={{span: 6, offset: 0}} key={id}>
                                <div className="movie">
                                    <img src={imageURL} className="img-fluid poster" alt="movie poster" />
                                    <h1 id="movie_titles" key={id}>{movie.title}</h1>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>

    )

}

export default Display;