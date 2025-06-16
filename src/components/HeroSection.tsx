
import { Play, Info } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            The Matrix
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-200 transition-colors">
              <Play className="w-5 h-5" />
              <span>Play</span>
            </button>
            <button className="bg-gray-600/80 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-600 transition-colors backdrop-blur-sm">
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
