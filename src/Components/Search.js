import React, {Component} from 'react';
import Jumbo from "./Jumbo";
import Display from "./Display";
import "../styles/search.css";

class Search extends Component {
    state = {
        searchYear: "",
        results: {}
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    onClick = e => {
        e.preventDefault();
        let api_key = process.env.REACT_APP_APIKEY;
        let searchYear = this.state.searchYear;
        let baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=en&primary_release_year=`
        fetch(baseURL + searchYear) 
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({results: data});
        })
        .catch(error => {
            console.log("ERROR", error);
        }) 
    }
    render() {
        return (
            <div id="search_form">
                <form>
                <input name="searchYear" type="number" max="2019" min="1900" onChange={this.onChange}></input>
                <button onClick={this.onClick}>Search</button>
                </form>
                <Jumbo one={this.state.results} year={this.state.searchYear}/>
                <Display movie={this.state.results} />
            </div>
        )
    }
}

export default Search;