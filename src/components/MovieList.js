// src/components/MovieList.js
const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  // Assuming the first movie is the recommended one
  const recommendedMovie = movies[0];

  return (
    <div className="flex flex-wrap justify-center">
      {/* Recommended Movie */}
      <div className="m-4 p-4 border border-gray-300 rounded-md bg-yellow-100">
        <span className="text-xs bg-yellow-300 text-yellow-800 font-bold px-2 py-1 rounded-md absolute">Recommended</span>
        <img src={recommendedMovie.Poster} alt={recommendedMovie.Title} className="w-48 h-72 object-cover" />
        <h3 className="mt-2 text-lg font-semibold w-48 break-words">
          {recommendedMovie.Title}
        </h3>
        <p>{recommendedMovie.Year}</p>
      </div>

      {/* Other Movies */}
      {movies.slice(1).map((movie) => (
        <div key={movie.imdbID} className="m-4 p-4 border border-gray-300 rounded-md">
          <img src={movie.Poster} alt={movie.Title} className="w-48 h-72 object-cover" />
          <h3 className="mt-2 text-lg font-semibold w-48 break-words">
            {movie.Title}
          </h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
