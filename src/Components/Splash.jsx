import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      results: {},
    };
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=a27647a7e82396bb23e5e83b8a91aca2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=en&?sort_by=popularity.desc'
)
      .then(response => response.json())
      .then((data) => {
        this.setState({ results: data });
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  }

  render() {
    return (
      <div>
        <Container>
          <div className="movie_results">
            <Row>
              <h2>Now Showing</h2>
            </Row>
            <Row>
              {this.state.results.results
                ? this.state.results.results.map((movie, id) => {
                  const movie_poster = movie.poster_path.toString();
                  const imageURL =                    'https://image.tmdb.org/t/p/w342' + movie_poster;
                  return (
                    <Col
                      sm={{ span: 10, offset: 1 }}
                      md={{ span: 6, offset: 0 }}
                      lg={{ span: 4, offset: 0 }}
                      key={id}
                    >
                      <div className="movie">
                        <img
                          src={imageURL}
                          className="img-fluid poster"
                          alt="movie poster"
                        />
                        <h1 id="movie_titles" key={id}>
                          {movie.title}
                        </h1>
                      </div>
                    </Col>
                  );
                })
                : null}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Splash;
