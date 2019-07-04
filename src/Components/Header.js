import React, { Component } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap'
import "../styles/header.css";
import Display from "./Display";
import Jumbo from "./Jumbo";
import moment from "moment";

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
                if (!data) {console.log('THIS')}
                this.setState({ results: data });
                this.setState({ searchYearProp: searchYear });
                this.setState({ searchYear: "" });
            })
            .catch(error => {
                console.log("ERROR", error);
            });
        pageNumber += 1;
        // console.log(pageNumber)
    };
    render() {
        let now = moment(new Date()).format('YYYY');
        let maxYear = parseInt(now) + 5;
        return (
            <div>
                <Container>
                    <Navbar bg="dark" expand="lg">
                        <Row>
                            <Row>
                                <Col>
                                    <Navbar.Brand href="#home">Movie Time Machine</Navbar.Brand>
                                    <h4>Are you ready for a blast from the past?</h4>
                                    <h4>Enter a search year to start.</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div id="search_form">
                                        <form onSubmit={this.onClick}>
                                            <input
                                                name="searchYear"
                                                type="number"
                                                max={maxYear}
                                                min="1900"
                                                value={this.state.searchYear}
                                                onChange={this.onChange}
                                                required
                                            />
                                            <button type = "submit">
                                                <i className="fas fa-search" />
                                            </button>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                    </Navbar>
                </Container >
                <Jumbo one={this.state.results} year={this.state.searchYearProp} />
                <Display movie={this.state.results} year={this.state.searchYearProp} click={this.onClick} />
                <footer>
                    <a href="https://www.themoviedb.org" target="_">
                        <img
                            src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
                            alt="Powered by the Movie Database"
                        />
                    </a>
                    <p>Designed by <a href="http://www.lisaceedesign.com">LisaCeeDesign</a></p>
                </footer>
            </div >
        )
    }
}

export default HeaderSearch;