
import { Play, Star, Calendar, Clock, Tv } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Series {
  id: string;
  title: string;
  poster: string;
  rating: number;
  year: string;
  genre: string;
  seasons: number;
  episodes: number;
}

interface SeriesCardProps {
  series: Series;
}

const SeriesCard = ({ series }: SeriesCardProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  const videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <Link to={`/series/${series.id}`} className="group block">
      <div 
        className="relative overflow-hidden rounded-lg bg-gray-900 transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setShowVideo(true)}
        onMouseLeave={() => {
          setShowVideo(false);
          setVideoError(false);
        }}
      >
        {showVideo && !videoError ? (
          <video
            autoPlay
            muted
            loop
            className="w-full aspect-[3/4] object-cover"
            poster={series.poster}
            onError={() => setVideoError(true)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={series.poster}
            alt={series.title}
            className="w-full aspect-[3/4] object-cover transition-opacity duration-300 group-hover:opacity-80"
          />
        )}
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <Tv className="w-12 h-12 text-white mx-auto mb-2" />
            <p className="text-white font-semibold">Watch Series</p>
          </div>
        </div>

        <div className="absolute top-2 right-2 bg-black/80 rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs font-medium">{series.rating}</span>
        </div>

        <div className="absolute top-2 left-2 bg-blue-600 rounded-full px-2 py-1">
          <span className="text-white text-xs font-medium">TV</span>
        </div>
      </div>
      
      <div className="mt-3">
        <h3 className="text-white font-semibold text-sm group-hover:text-red-400 transition-colors line-clamp-2">
          {series.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-gray-400 text-xs">{series.year}</span>
          <span className="text-gray-400 text-xs">{series.genre}</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-gray-500 text-xs">{series.seasons} Season{series.seasons > 1 ? 's' : ''}</span>
          <span className="text-gray-500 text-xs">{series.episodes} Episodes</span>
        </div>
      </div>
    </Link>
  );
};

export default SeriesCard;

