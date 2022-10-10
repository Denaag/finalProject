import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import './index.css';
import SearchIcon from './search.svg';
import './App.css'
import Navbar from './components/nav-bar';

//dc91d3ec

// creating a static variable
const API_URL = 'http://www.omdbapi.com?apikey=dc91d3ec';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //we want this to fetch the data as soon as we load API (useEffect)
  const searchMovies = async (title) => {// asyncronous data function - meaning data will take time to fetch
    const response = await fetch(`${API_URL}&s=${title}`);//this calls the API
    const data = await response.json();//once we get the response we have to use this to get the data

    // console.log(data) - allows us to see data from what was fetched

    setMovies(data.Search); //the data gets set based on title searched
  }

  useEffect(() => {
    searchMovies("Halloween");
  }, []);



  return (
    <div className="app">
      <h1>Hollywood Blvd</h1>

      <div className='search'>
        <input 
          placeholder='Search for your film'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img 
          value={searchTerm} 
          src={SearchIcon}
          alt='search'
          
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      
    {/* if search line is blank it will return no movies found */}
      {movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )}
        <Navbar />
    </div>
  );
}

export default App;
