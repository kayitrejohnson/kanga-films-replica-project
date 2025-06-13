
import { Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;
  year: string;
  genre: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoUrl = "https://www.mediafire.com/file/e9itfcozop8cmd6/Deputy_E11.mp4/file";

  return (
    <Link to={`/movie/${movie.id}`} className="group block">
      <div 
        className="relative overflow-hidden rounded-lg bg-gray-900 transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setShowVideo(true)}
        onMouseLeave={() => setShowVideo(false)}
      >
        {showVideo ? (
          <video
            autoPlay
            muted
            loop
            className="w-full aspect-[3/4] object-cover"
            poster={movie.poster}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full aspect-[3/4] object-cover transition-opacity duration-300 group-hover:opacity-80"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <Play className="w-12 h-12 text-white mx-auto mb-2" />
            <p className="text-white font-semibold">Watch Now</p>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/80 rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs font-medium">{movie.rating}</span>
        </div>
      </div>
      
      <div className="mt-3">
        <h3 className="text-white font-semibold text-sm group-hover:text-red-400 transition-colors">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-gray-400 text-xs">{movie.year}</span>
          <span className="text-gray-400 text-xs">{movie.genre}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
