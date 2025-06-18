
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Star, Calendar, Clock, Tv, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { series } from "@/data/series";
import { useState } from "react";

const SeriesDetail = () => {
  const { id } = useParams();
  const [showVideo, setShowVideo] = useState(false);
  
  const show = series.find(s => s.id === id);

  if (!show) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Series Not Found</h1>
          <Link to="/series" className="text-red-400 hover:text-red-300 underline">
            Back to Series
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Link
          to="/series"
          className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Series
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="lg:col-span-1">
            <img
              src={show.poster}
              alt={show.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full px-3 py-1 mr-3">
                <span className="text-white text-sm font-medium">TV SERIES</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white font-medium">{show.rating}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">{show.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center text-gray-300">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{show.year}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-2" />
                <span>{show.duration}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Tv className="w-4 h-4 mr-2" />
                <span>{show.seasons} Season{show.seasons > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-4 h-4 mr-2" />
                <span>{show.episodes} Episodes</span>
              </div>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                {show.genre}
              </span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {show.description}
            </p>

            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2">Creator</h3>
              <p className="text-gray-300">{show.creator}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-white font-semibold mb-2">Cast</h3>
              <p className="text-gray-300">{show.cast.join(", ")}</p>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={() => setShowVideo(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Series
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700 px-8 py-3 text-lg"
              >
                Add to Watchlist
              </Button>
            </div>
          </div>
        </div>

        {/* Video Player */}
        {showVideo && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Now Playing</h2>
              <Button
                onClick={() => setShowVideo(false)}
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700"
              >
                Close Player
              </Button>
            </div>
            <VideoPlayer videoUrl={show.videoUrl} title={show.title} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SeriesDetail;
