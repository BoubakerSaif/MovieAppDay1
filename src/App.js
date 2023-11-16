import React from "react";
import "./App.css";
import data from "./data";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

const App = () => {
  return (
    <div className="App">
      <br />
      <AddMovie />
      <br />
      <center>
        <MovieList data={data} />
      </center>
    </div>
  );
};

export default App;
