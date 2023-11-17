import React, { useState } from "react";
import "./App.css";
import data from "./data";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState(data);

  const Adding = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  console.log(movies);
  console.log(data);

  return (
    <div className="App">
      <br />
      <AddMovie Adding={Adding} />
      <br />
      <center>
        <MovieList data={movies} />
      </center>
    </div>
  );
};

export default App;
