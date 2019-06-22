import React, {Component} from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap'
import "../styles/header.css";
// import Splash from "./Splash"
import Display from "./Display";
import Jumbo from "./Jumbo";

class HeaderSearch extends Component {
    state = {
        searchYear: "",
        results: {},
        searchYearProp: "",
      };
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      onClick = e => {
        e.preventDefault();
        let api_key = process.env.REACT_APP_APIKEY;
        let searchYear = this.state.searchYear;
        let pageNumber = 1;
        let baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_original_language=en&primary_release_year=`;
        fetch(baseURL + searchYear)
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.setState({ results: data });
            this.setState({ searchYearProp: searchYear });
            this.setState({ searchYear: "" });
          })
          .catch(error => {
            console.log("ERROR", error);
          });
          pageNumber += 1;
          console.log(pageNumber)
      };
      render() {
    return (
        <div>
            <Container className="fixed-top">
                <Navbar bg="dark" expand="lg">
                    <Row>
                    <Row>
                        <Col>
                            <Navbar.Brand href="#home">Movie Time Machine</Navbar.Brand>

                            <p>Are you ready for a blast from the past?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div id="search_form">
                            <form>
                                <input
                                    name="searchYear"
                                    type="number"
                                    max="2019"
                                    min="1900"
                                    value={this.state.searchYear}
                                    onChange={this.onChange}
                                />
                                <button onClick={this.onClick}>
                                    <i className="fas fa-search" />
                                </button>
                            </form>
                        </div>
                        </Col>
                        {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Row>
                    </Row>
                </Navbar>
            </Container >
            <Jumbo one={this.state.results} year={this.state.searchYearProp} />
        <Display movie={this.state.results} year={this.state.searchYearProp} click={this.onClick}/>
        </div >
    )
                    }
}

export default HeaderSearch;