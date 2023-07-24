import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar";
import SearchList from "./components/SearchList";

//https://api.seatgeek.com/2/venues?city=atlanta&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56
function App() {
  const getData = async () => {
    const dat = await axios.get(
      "https://api.seatgeek.com/2/venues?city=atlanta&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56"
    );

    const res = await dat.data;

    console.log(res);
  };

  useEffect(() => {
    //getData();
  }, []);
  return (
    <div className="App">
      <h1>Events Finder</h1>
      <Searchbar />
      <SearchList />
    </div>
  );
}

export default App;
