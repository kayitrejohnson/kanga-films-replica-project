
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";
import { movies } from "@/data/movies";

const GenrePage = () => {
  const { genre } = useParams<{ genre: string }>();
  
  // Capitalize the genre name for display
  const capitalizedGenre = genre?.charAt(0).toUpperCase() + genre?.slice(1) || "Unknown";
  
  // Filter movies by genre (case-insensitive matching)
  const genreMovies = movies.filter(movie => 
    movie.genre.toLowerCase().includes(genre?.toLowerCase() || "")
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {capitalizedGenre} Movies
          </h1>
          <p className="text-gray-400">
            Discover the best {genre} movies and series
          </p>
        </div>
        <MovieGrid title={`${capitalizedGenre} Movies`} movies={genreMovies} />
        
        {genreMovies.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-white mb-2">No movies found</h3>
            <p className="text-gray-400">
              We don't have any {genre} movies in our collection yet.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default GenrePage;
