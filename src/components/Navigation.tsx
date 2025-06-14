
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Romance",
    "Thriller",
    "Adventure",
    "Animation",
    "Documentary",
    "Fantasy",
    "Crime"
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-white font-bold text-xl">KANGA Films</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/movies" className="text-gray-300 hover:text-white transition-colors">
              Movies
            </Link>
            <Link to="/series" className="text-gray-300 hover:text-white transition-colors">
              Series
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white transition-colors focus:outline-none">
                Genres
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-gray-700 min-w-[200px]">
                {genres.map((genre) => (
                  <DropdownMenuItem key={genre} asChild>
                    <Link
                      to={`/genres/${genre.toLowerCase()}`}
                      className="text-gray-300 hover:text-white hover:bg-gray-800 w-full px-3 py-2 cursor-pointer"
                    >
                      {genre}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 w-64"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/movies" className="text-gray-300 hover:text-white transition-colors">
                Movies
              </Link>
              <Link to="/series" className="text-gray-300 hover:text-white transition-colors">
                Series
              </Link>
              <div className="text-gray-300">
                <span className="font-medium mb-2 block">Genres</span>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  {genres.map((genre) => (
                    <Link
                      key={genre}
                      to={`/genres/${genre.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
