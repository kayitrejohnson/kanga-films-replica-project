
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeriesGrid from "@/components/SeriesGrid";
import { series } from "@/data/series";
import { Button } from "@/components/ui/button";
import { Search, Filter, Tv } from "lucide-react";
import { Input } from "@/components/ui/input";

const SeriesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  // Get unique genres
  const genres = ["All", ...Array.from(new Set(series.map(show => show.genre)))];

  // Filter and sort series
  let filteredSeries = series.filter(show => 
    show.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGenre === "All" || show.genre.includes(selectedGenre))
  );

  // Sort series
  filteredSeries = filteredSeries.sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "year":
        return parseInt(b.year.split('-')[1]) - parseInt(a.year.split('-')[1]);
      case "title":
        return a.title.localeCompare(b.title);
      case "seasons":
        return b.seasons - a.seasons;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Tv className="w-8 h-8 text-red-600" />
            <h1 className="text-4xl font-bold text-white">TV Series & Shows</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Explore hundreds of TV series with professional translation services
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
                placeholder="Search TV series..."
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
                <option value="seasons">Seasons</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-400">
            Showing {filteredSeries.length} of {series.length} series
          </div>
        </div>

        {/* Series Grid */}
        <SeriesGrid title="TV Series Collection" series={filteredSeries} />
      </main>

      <Footer />
    </div>
  );
};

export default SeriesPage;

