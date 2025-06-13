
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 30; // Increased for better performance with 1000+ movies
  
  const displayedMovies = showAll 
    ? movies.slice(0, currentPage * moviesPerPage)
    : movies.slice(0, 18); // Show 18 initially (3 rows)

  const hasMoreMovies = movies.length > displayedMovies.length;

  const loadMore = () => {
    if (!showAll) {
      setShowAll(true);
      setCurrentPage(2);
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  const showLess = () => {
    setShowAll(false);
    setCurrentPage(1);
  };

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <span className="text-gray-400 text-sm">
          {displayedMovies.length} of {movies.length} movies
        </span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {displayedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      <div className="text-center mt-8 space-x-4">
        {hasMoreMovies && (
          <Button 
            onClick={loadMore}
            variant="outline"
            className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
          >
            Load More Movies ({movies.length - displayedMovies.length} remaining)
          </Button>
        )}
        
        {showAll && displayedMovies.length > 18 && (
          <Button 
            onClick={showLess}
            variant="outline"
            className="bg-gray-700 border-gray-500 text-white hover:bg-gray-600"
          >
            Show Less
          </Button>
        )}
      </div>
    </section>
  );
};

export default MovieGrid;
