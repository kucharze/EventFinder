import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar";
import SearchList from "./components/SearchList";

function App() {
  return (
    <div className="App">
      <h1>Events Finder</h1>
      <img
        src="https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_640.jpg"
        alt="crowd of people"
        className="crowd"
      />
      <Searchbar />
      <SearchList />
    </div>
  );
}

export default App;
