import React, {Component} from "react";
import "../styles/display.css";
import { Container, Row, Col } from "react-bootstrap";

class Display extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchYear: "",
      results: {},
      searchYearProp: "",
    }
  }

// onClick = e => {
//   e.preventDefault();
//   let api_key = process.env.REACT_APP_APIKEY;
//   let searchYear = this.props.year;
//   let pageNumber = 2;
//   let baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_original_language=en&primary_release_year=`;
//   fetch(baseURL + searchYear)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       console.log('DATA',data)
//       this.setState({ results: data });
//       this.setState({ searchYearProp: searchYear });
//       this.setState({ searchYear: "" });
//     })
//     .catch(error => {
//       console.log("ERROR", error);
//     });
//     pageNumber += 1;
//   }

  render() {
    console.log(this.props)
    let others;
    let defaultPosterURL =
      "https://images.unsplash.com/photo-1545129139-1beb780cf337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
    if (this.props.movie.results) {
      others = this.props.movie.results.slice(1);
    }
  return (
    <Container>
      <div className="movie_results">
        <Row>
          {this.props.movie.results &&
            others.map((movie, id) => {
              let movie_poster = movie.poster_path;
              let imageURL = "https://image.tmdb.org/t/p/w342" + movie_poster;
              return (
                <Col
                  sm={{ span: 10, offset: 1 }}
                  md={{ span: 6, offset: 0 }}
                  lg={{span: 4, offset: 0}}
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
            <button onClick={this.onClick}>Want More?</button>
        </Row>
      </div>
    </Container>
  );
}
  
};

export default Display;
