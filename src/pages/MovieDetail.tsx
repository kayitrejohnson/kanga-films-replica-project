
import { useParams } from "react-router-dom";
import { Play, Download, Star, Calendar, Clock } from "lucide-react";
import Navigation from "../components/Navigation";
import VideoPlayer from "../components/VideoPlayer";

const MovieDetail = () => {
  const { id } = useParams();

  // Sample movie data - in a real app this would come from an API
  const movie = {
    id: "1",
    title: "The Equalizer 3",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",
    rating: 8.5,
    year: "2023",
    genre: "Action",
    duration: "109 min",
    description: "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    director: "Antoine Fuqua",
    cast: ["Denzel Washington", "Dakota Fanning", "Eugenio Mastrandrea"]
  };

  const videoUrl = "https://www.mediafire.com/file/e9itfcozop8cmd6/Deputy_E11.mp4/file";

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url('${movie.backdrop}')`
          }}
        />
        
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Movie Poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-64 h-96 object-cover rounded-lg shadow-2xl"
            />
            
            {/* Movie Info */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {movie.title}
              </h1>
              
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{movie.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{movie.year}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{movie.duration}</span>
                </div>
                <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
                  {movie.genre}
                </span>
              </div>
              
              <p className="text-gray-200 text-lg mb-6 max-w-2xl">
                {movie.description}
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-red-700 transition-colors">
                  <Play className="w-5 h-5" />
                  <span>Watch Movie</span>
                </button>
                <button className="bg-gray-600/80 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-600 transition-colors">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Director:</span> {movie.director}
                </p>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Cast:</span> {movie.cast.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Player Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-white text-2xl font-bold mb-6">Watch {movie.title}</h2>
        <VideoPlayer videoUrl={videoUrl} title={movie.title} />
      </div>
      
      {/* Comments Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-white text-xl font-bold mb-6">Leave a Comment</h3>
          
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Enter display name"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            <textarea
              placeholder="Enter your comment message"
              rows={4}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 resize-none"
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
