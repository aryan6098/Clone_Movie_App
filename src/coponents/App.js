import React, { Component } from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    console.log(store);
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });

    console.log("State", this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab"> Movies</div>
            <div className="tab"> Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
          {movies.length === 0 ? (
            <div className="no-movie">No movies to display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
