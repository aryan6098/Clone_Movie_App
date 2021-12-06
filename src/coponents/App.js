import React, { Component } from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovie } from "../actions";

class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    console.log(store);
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    // store.dispatch({
    //   type: "ADD_MOVIES",
    //   movies: data,
    // });
    store.dispatch(addMovie(data));

    console.log("State", this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };
  render() {
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab"> Movies</div>
            <div className="tab"> Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {list.length === 0 ? (
            <div className="no-movie">No movies to display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
