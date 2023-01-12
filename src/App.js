import React from "react";
import axios from "axios";
import './stylesheets/App.css';
import { useRef, useState } from 'react';
import ProfileBoard from "./components/ProfileBoard";
import { ReactComponent as SunSVG } from './imgs/sun.svg';
import { ReactComponent as MoonSVG } from './imgs/moon.svg';
import { ReactComponent as SearchSVG } from './imgs/search.svg';

function App() {
  // all useRefs
  const usernameRef = useRef();
  // all useStates
  const [theme, setTheme] = useState('dark');
  const [userData, setUserData] = useState(null);

  // all functions

  // uses's API to find user or throws error
  const handleSearch = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.get(`https://api.github.com/users/${usernameRef.current.value}`);
      return setUserData(res.data);
    } catch (err){
      return console.log(err);
    }
  }

  // changes theme of page
  const handleThemeChange = () => {
    if(theme === 'dark'){
      return setTheme('light');
    } else {
      return setTheme('dark');
    }
  }

  return (
    <>
    <div className="app-container flex-center-all flex-column" id={theme}>
      <div className="app-header flex flex-row">
        <h2>Gitfinder</h2>
        <span className={`${theme === 'dark' ? 'sun-theme-label flex flex-align-center' : 'display-none'}`}>
          Light <SunSVG id="sun-svg" className="pointer" onClick={handleThemeChange}/>
        </span>
        <span className={`${theme === 'light' ? 'moon-theme-label flex flex-align-center' : 'display-none'}`}>
          Dark <MoonSVG id="moon-svg" className="pointer" onClick={handleThemeChange}/>
        </span>
      </div>
      <div className="flex-center-all">
        <form className="app-search flex" onSubmit={handleSearch}>
          <SearchSVG id="search-svg"/>
          <input ref={usernameRef} id='github-search' type='text' placeholder="Search Github username..."/>
          <input id='github-search-submit' type='submit' value='Search' className="pointer"/>
        </form>
      </div>
      <ProfileBoard data={userData}/>
    </div>
    </>
  );
}

export default App;
