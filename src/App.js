import { useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // Fetch movies based on search query
  const fetchMovies = async (query) => {
    const apiKey = '91f524ba';
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
    const data = await response.json();
    
    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      console.error(`Error: ${data.Error}`);
      setMovies([]);
    }
  };

  // Fetch recommended movies based on a genre
  const fetchRecommendations = async (genre) => {
    const apiKey = '91f524ba';
    const response = await fetch(`http://www.omdbapi.com/?s=${genre}&apikey=${apiKey}`);
    const data = await response.json();

    if (data.Response === "True") {
      setRecommendations(data.Search);
    } else {
      console.error(`Error: ${data.Error}`);
      setRecommendations([]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold">Movie Search & Recommendation</h1>
      <Search onSearch={fetchMovies} />
      <MovieList movies={movies} onRecommend={fetchRecommendations} />
      {recommendations.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mt-8 text-center">Recommended Movies</h2>
          <MovieList movies={recommendations} />
        </div>
      )}
    </div>
  );
};

export default App;
