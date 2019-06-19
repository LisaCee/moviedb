import React from 'react';
import './App.css';
import Search from "./Components/Search";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container><Row><Col>
        <h1>Movie Time Machine</h1>
        <h4>Are you ready for a blast from the past?</h4>
        <h6>Search between 1900 through current day to discover movies through the ages. </h6>
        <Search />
      </Col></Row></Container>
    </div>
  );
}

export default App;
