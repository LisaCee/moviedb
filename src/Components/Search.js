import React, {Component} from 'react';
import Display from "./Display";

class Search extends Component {
    state = {
        searchYear: "",
        results: {}
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    }
    onClick = e => {
        e.preventDefault();
        let searchYear = this.state.searchYear;
        console.log('SEARCH', searchYear)
        let baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=a27647a7e82396bb23e5e83b8a91aca2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${searchYear}`
        fetch(baseURL) 
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({results: data})
        })
        .catch(error => {
            console.log("ERROR", error);
        }) 
    }
    render() {
        return (
            <div>
                <form>
                <input name="searchYear" type="number" max="2019" min="1900" onChange={this.onChange}></input>
                <button onClick={this.onClick}>Search</button>
                </form>
                <Display movie={this.state.results}/>
            </div>
        )
    }
}

export default Search;