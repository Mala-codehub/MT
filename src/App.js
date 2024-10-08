import { useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  // Updated function with API key and search parameter
  const fetchMovies = async (query) => {
    const apiKey = '91f524ba'; // Your OMDb API key
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
    const data = await response.json();
    console.log(data); // Log the response to check for errors

    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      console.error(`Error: ${data.Error}`); // Log the error message for debugging
      setMovies([]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold">Movie Search & Recommendation</h1>
      <Search onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
