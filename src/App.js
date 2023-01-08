import React from "react";
import axios from "axios";
import './stylesheets/App.css';
import { ReactComponent as SunSVG } from './imgs/sun.svg';
import { ReactComponent as SearchSVG } from './imgs/search.svg';

function App() {
  return (
    <>
    <div className="app-container flex-center-all flex-column">
      <div className="app-header flex flex-row">
        <h2>Gitfinder</h2>
        <span className="theme-label flex flex-align-center">Light
          <SunSVG id="sun-svg" className="pointer"/>
        </span>
      </div>
      <div className="flex-center-all">
        <form className="app-search flex">
          <SearchSVG id="search-svg"/>
          <input id='github-search' type='text' placeholder="Search Github username..."/>
          <input id='github-search-submit' type='submit' value='Search' className="pointer"/>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
