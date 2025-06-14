
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";

const GenrePage = () => {
  const { genre } = useParams<{ genre: string }>();
  
  // Capitalize the genre name for display
  const capitalizedGenre = genre?.charAt(0).toUpperCase() + genre?.slice(1) || "Unknown";

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
        <MovieGrid title={`${capitalizedGenre} Movies`} movies={[]} />
      </main>
      <Footer />
    </div>
  );
};

export default GenrePage;
