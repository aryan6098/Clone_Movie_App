import React, { Component } from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab"> Movies</div>
            <div className="tab"> Favourites</div>
          </div>
          <div className="list">
            {data.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
          {data.length === 0 ? (
            <div className="no-movie">No movies to display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
