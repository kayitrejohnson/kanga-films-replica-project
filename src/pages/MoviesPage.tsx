
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";
import { movies } from "@/data/movies";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  // Get unique genres
  const genres = ["All", ...Array.from(new Set(movies.map(movie => movie.genre)))];

  // Filter and sort movies
  let filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGenre === "All" || movie.genre === selectedGenre)
  );

  // Sort movies
  filteredMovies = filteredMovies.sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "year":
        return parseInt(b.year) - parseInt(a.year);
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">All Movies</h1>
          <p className="text-gray-400 text-lg">
            Discover thousands of movies with complete translation services
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>

            {/* Genre Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white rounded-md px-3 py-2 text-sm"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white rounded-md px-3 py-2 text-sm"
              >
                <option value="rating">Rating</option>
                <option value="year">Year</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-400">
            Showing {filteredMovies.length} of {movies.length} movies
          </div>
        </div>

        {/* Movies Grid */}
        <MovieGrid title="Movies Collection" movies={filteredMovies} />
      </main>

      <Footer />
    </div>
  );
};

export default MoviesPage;

