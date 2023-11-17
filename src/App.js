import React, { useState } from "react";
import "./App.css";
import data from "./data";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState(data);

  // const Adding = (newMovie) => {
  //   setMovies([...movies, newMovie]);
  // };

  return (
    <div className="App">
      <br />
      {/* <AddMovie Adding={Adding}  /> */}
      <AddMovie movies={movies} setMovies={setMovies} />
      <br />
      <center>
        <MovieList data={movies} />
      </center>
    </div>
  );
};

export default App;
