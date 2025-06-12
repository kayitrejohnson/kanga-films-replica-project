
import MovieCard from "./MovieCard";

interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;
  year: string;
  genre: string;
}

interface MovieGridProps {
  title: string;
  movies: Movie[];
}

const MovieGrid = ({ title, movies }: MovieGridProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-white text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;
