import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, Download, Star, Clock, Calendar, MessageCircle, User, FileText } from "lucide-react";
import { movies } from "@/data/movies";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const TranslatorPage = () => {
  const { translator } = useParams<{ translator: string }>();
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const { toast } = useToast();
  
  // Convert URL slug back to readable name
  const translatorName = translator?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || "Unknown Translator";

  // Get translator's available movies (all movies since they have complete access)
  const translatorMovies = movies.slice(0, 24); // Show first 24 movies for better performance
  
  // Get unique genres for filtering
  const genres = ["All", ...Array.from(new Set(translatorMovies.map(movie => movie.genre)))];
  
  // Filter movies by selected genre
  const filteredMovies = selectedGenre === "All" 
    ? translatorMovies 
    : translatorMovies.filter(movie => movie.genre === selectedGenre);

  const handleStartProject = () => {
    toast({
      title: "Translation Project Started",
      description: `Starting a new translation project with ${translatorName}. You will be contacted shortly.`,
    });
  };

  const handleViewPortfolio = () => {
    toast({
      title: "Portfolio Loading",
      description: `Loading ${translatorName}'s complete portfolio and previous work samples.`,
    });
  };

  const handleContactTranslator = () => {
    toast({
      title: "Contact Request Sent",
      description: `Your contact request has been sent to ${translatorName}. They will respond within 24 hours.`,
    });
  };

  const handleTranslateMovie = (movieTitle: string) => {
    toast({
      title: "Translation Request",
      description: `Translation request for "${movieTitle}" has been sent to ${translatorName}.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {translatorName}
          </h1>
          <p className="text-gray-400">
            Expert Movie Translator - Complete Access to All Movie Parts
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Translator Profile */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">About {translatorName}</h2>
            <p className="text-gray-300 mb-6">
              {translatorName} is an expert movie translator with complete access to all parts of every movie. 
              Specializing in high-quality translations and subtitling services for the Rwandan film industry.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Complete Movie Access</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Full Movie Translation</li>
                  <li>• All Scenes & Chapters</li>
                  <li>• Complete Subtitle Track</li>
                  <li>• Audio Commentary Translation</li>
                  <li>• Behind-the-Scenes Content</li>
                  <li>• Bonus Features Translation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Expert Services</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Professional Movie Subtitling</li>
                  <li>• Real-time Live Translation</li>
                  <li>• Cultural Context Adaptation</li>
                  <li>• Quality Assurance & Review</li>
                  <li>• Multi-format Export</li>
                  <li>• Express Delivery Options</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Movie Access Features */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Movie Parts Access</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">Complete Movie Library</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm">Full Access</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Access to translate every scene, dialogue, and subtitle of all movies in the library
                </p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">All Movie Formats</h3>
                  <div className="flex items-center space-x-1">
                    <Play className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">Supported</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Compatible with HD, 4K, and all video formats for seamless translation workflow
                </p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">Export Options</h3>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 text-sm">Multiple Formats</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Download translations in SRT, VTT, ASS, and other popular subtitle formats
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Expertise Section - Moved Here */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Languages Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <span className="bg-red-600 text-white px-4 py-3 rounded-lg text-sm text-center font-medium">Kinyarwanda</span>
            <span className="bg-blue-600 text-white px-4 py-3 rounded-lg text-sm text-center font-medium">English</span>
            <span className="bg-green-600 text-white px-4 py-3 rounded-lg text-sm text-center font-medium">French</span>
            <span className="bg-purple-600 text-white px-4 py-3 rounded-lg text-sm text-center font-medium">Swahili</span>
          </div>
        </div>

        {/* Available Movies Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Available Movies</h2>
            <span className="text-gray-400 text-sm">
              {filteredMovies.length} movies available
            </span>
          </div>
          
          {/* Genre Filter */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedGenre === genre
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredMovies.map((movie) => (
              <div key={movie.id} className="group block">
                <div className="relative overflow-hidden rounded-lg bg-gray-900 transition-transform duration-300 hover:scale-105">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full aspect-[3/4] object-cover transition-opacity duration-300 group-hover:opacity-80"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <button
                        onClick={() => handleTranslateMovie(movie.title)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Translate</span>
                      </button>
                      <Link
                        to={`/movie/${movie.id}`}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-2"
                      >
                        <FileText className="w-4 h-4" />
                        <span>View Details</span>
                      </Link>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 bg-black/80 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs font-medium">{movie.rating}</span>
                  </div>

                  {/* Translation Status */}
                  <div className="absolute top-2 left-2 bg-green-600 rounded-full px-2 py-1">
                    <span className="text-white text-xs font-medium">Available</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <h3 className="text-white font-semibold text-sm group-hover:text-red-400 transition-colors line-clamp-2">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-400 text-xs">{movie.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-400 text-xs">{movie.duration}</span>
                    </div>
                  </div>
                  <div className="mt-1">
                    <span className="text-gray-500 text-xs">{movie.genre}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Work Section */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Ready to Work</h2>
          <p className="text-gray-300 mb-4">
            {translatorName} is available for immediate movie translation projects with full access to all movie content and parts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={handleStartProject}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              <Play className="w-4 h-4 mr-2" />
              Start Translation Project
            </Button>
            <Button 
              onClick={handleViewPortfolio}
              variant="secondary"
              className="bg-gray-600 text-white hover:bg-gray-700"
            >
              <User className="w-4 h-4 mr-2" />
              View Portfolio
            </Button>
            <Button 
              onClick={handleContactTranslator}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Translator
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TranslatorPage;
