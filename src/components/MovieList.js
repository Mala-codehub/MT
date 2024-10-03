// src/components/MovieList.js
const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="m-4 p-4 border border-gray-300 rounded-md">
          <img src={movie.Poster} alt={movie.Title} className="w-48 h-72 object-cover" />
          {/* Wrapping the title if it is too long */}
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
