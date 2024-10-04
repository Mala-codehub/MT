// src/components/MovieList.js
const MovieList = ({ movies }) => {
  if (movies.length === 0) return null;

  // Separate the first movie from the rest
  const [firstMovie, ...restMovies] = movies;

  return (
    <div className="container mx-auto p-4">
      {/* First movie displayed with poster on the left and details on the right */}
      <div className="flex flex-col lg:flex-row items-center border border-gray-300 rounded-md p-4 mb-4">
        <img
          src={firstMovie.Poster !== "N/A" ? firstMovie.Poster : "https://via.placeholder.com/150"}
          alt={firstMovie.Title}
          className="w-48 h-72 object-cover mb-4 lg:mb-0 lg:mr-8"
        />
        <div>
          <h2 className="text-2xl font-bold">{firstMovie.Title}</h2>
          <p className="text-lg">Year: {firstMovie.Year}</p>
          <p className="text-lg">Type: {firstMovie.Type}</p>
          <p className="text-lg">IMDb ID: {firstMovie.imdbID}</p>
          <p className="text-blue-600 text-xl font-bold">Recommended</p>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="my-8" />

      {/* Render the rest of the movies in a grid format */}
      <div className="flex flex-wrap justify-center">
        {restMovies.map((movie) => (
          <div key={movie.imdbID} className="m-4 p-4 border border-gray-300 rounded-md">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              className="w-48 h-72 object-cover"
            />
            <h3 className="mt-2 text-lg font-semibold w-48 break-words">
              {movie.Title}
            </h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
