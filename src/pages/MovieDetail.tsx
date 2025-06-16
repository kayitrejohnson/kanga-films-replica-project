
import { useParams } from "react-router-dom";
import { Play, Download, Star, Calendar, Clock } from "lucide-react";
import Navigation from "../components/Navigation";
import VideoPlayer from "../components/VideoPlayer";
import { useState } from "react";
import { movies } from "../data/movies";

const MovieDetail = () => {
  const { id } = useParams();
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  // Find the movie by ID from the movies data
  const movie = movies.find(m => m.id === id);

  // Fallback movie data if not found
  const defaultMovie = {
    id: "1",
    title: "Movie Not Found",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",
    rating: 0,
    year: "2023",
    genre: "Unknown",
    duration: "0 min",
    description: "This movie could not be found in our database.",
    director: "Unknown",
    cast: ["Unknown"],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  };

  const currentMovie = movie || defaultMovie;

  const handleWatchMovie = () => {
    setShowVideoPlayer(true);
    // Scroll to video player
    setTimeout(() => {
      const videoElement = document.getElementById('video-player-section');
      if (videoElement) {
        videoElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleDownload = () => {
    window.open(currentMovie.videoUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Movie Poster */}
            <img
              src={currentMovie.poster}
              alt={currentMovie.title}
              className="w-64 h-96 object-cover rounded-lg shadow-2xl"
            />
            
            {/* Movie Info */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {currentMovie.title}
              </h1>
              
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{currentMovie.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{currentMovie.year}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{currentMovie.duration}</span>
                </div>
                <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
                  {currentMovie.genre}
                </span>
              </div>
              
              <p className="text-gray-200 text-lg mb-6 max-w-2xl">
                {currentMovie.description}
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <button 
                  onClick={handleWatchMovie}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-red-700 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Movie</span>
                </button>
                <button 
                  onClick={handleDownload}
                  className="bg-gray-600/80 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-600 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Director:</span> {currentMovie.director}
                </p>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Cast:</span> {Array.isArray(currentMovie.cast) ? currentMovie.cast.join(", ") : currentMovie.cast}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Player Section */}
      {showVideoPlayer && (
        <div id="video-player-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-black/60 backdrop-blur-sm">
          <h2 className="text-white text-2xl font-bold mb-6">Watch {currentMovie.title}</h2>
          <VideoPlayer videoUrl={currentMovie.videoUrl} title={currentMovie.title} />
        </div>
      )}
      
      {/* Comments Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-white text-xl font-bold mb-6">Leave a Comment</h3>
          
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Enter display name"
              className="w-full bg-gray-700/80 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 backdrop-blur-sm"
            />
            <textarea
              placeholder="Enter your comment message"
              rows={4}
              className="w-full bg-gray-700/80 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 resize-none backdrop-blur-sm"
            />
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              SUBMIT
            </button>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-semibold">177 Comments</h4>
            {/* Sample comments */}
            <div className="space-y-4">
              <div className="flex space-x-3">
                <div className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  P
                </div>
                <div>
                  <p className="text-white font-semibold">pandji</p>
                  <p className="text-gray-300 text-sm">Riguzara African kbx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
