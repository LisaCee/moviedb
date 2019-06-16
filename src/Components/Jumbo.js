import React from 'react';
import "../styles/jumbo.css";
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Jumbo = props => {
    console.log(props)
    let imageURL;
    if (props.one.results) {
        let backdropImg = props.one.results[0].backdrop_path;
        imageURL = "https://image.tmdb.org/t/p/w1280" + backdropImg;
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>

                        {props.one.results ?
                            (<div>
                                <Jumbotron>
                                    <div className="movie_details">
                                        <img src={imageURL} alt="movie poster"/>
                                        <div className="movie_year">{props.year}</div>
                                        <h1>{props.one.results[0].title}</h1>
                                        <p>{props.one.results[0].overview}</p>
                                    </div>
                                </Jumbotron>
                            </div>) : (<h1>Put something here for splash screen</h1>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Jumbo;