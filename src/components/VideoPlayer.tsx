
import { Play, Pause, Volume2, VolumeX, Maximize, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

const VideoPlayer = ({ videoUrl, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Convert MediaFire link to direct download link
  const getDirectVideoUrl = (url: string) => {
    if (url.includes('mediafire.com')) {
      // Extract the file ID from MediaFire URL
      const fileId = url.match(/file\/([^\/]+)\//)?.[1];
      if (fileId) {
        return `https://download${Math.floor(Math.random() * 1000)}.mediafire.com/file/${fileId}/Deputy_E11.mp4`;
      }
    }
    return url;
  };

  const directVideoUrl = getDirectVideoUrl(videoUrl);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadStart = () => setIsLoading(true);
      const handleCanPlay = () => setIsLoading(false);
      const handleError = () => {
        setHasError(true);
        setIsLoading(false);
      };

      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => setHasError(true));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  if (hasError) {
    return (
      <div className="relative bg-gray-800 rounded-lg overflow-hidden">
        <div className="w-full h-[400px] flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Video Unavailable</h3>
            <p className="text-gray-400 mb-4">
              The video cannot be loaded from the current source.
            </p>
            <button
              onClick={() => window.open(videoUrl, '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Open Video Link
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative bg-black rounded-lg overflow-hidden group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-[400px] object-cover"
        poster="https://images.unsplash.com/photo-1489599577372-e4f69204c1b3?w=800&h=400&fit=crop"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        crossOrigin="anonymous"
        preload="metadata"
      >
        <source src={directVideoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p>Loading video...</p>
          </div>
        </div>
      )}
      
      {showControls && !isLoading && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
          </div>
        </div>
      )}
      
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">{title}</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="text-white hover:text-red-400 transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-red-400 transition-colors"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
