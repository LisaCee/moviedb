import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const request = require("supertest");
let api_key = process.env.REACT_APP_APIKEY;
let searchYear = 1999;

let baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&year=`;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('moviedb api server', () => {
  test("should get a response from GET", () => {
    const response = request(baseURL, searchYear).get("/");
    expect(response.status).toBeTruthy;
  })
  test("should return an object from GET", () => {
    const response = request(baseURL).get("/");
    console.log(typeof(response))
    expect(typeof(response)).toBe("object")
  })
})
