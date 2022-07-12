import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './Row.scss';
import './Banner.scss';
import './Nav.scss';
import requests from './request';
import { Row } from './Row';
import { Banner } from './Banner';
import { Nav } from './Nav';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Row 
        title = "NETFLIX ORIGINALS"
        fetchUrl = {requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies} />


    </div>
  );
}

export default App;
