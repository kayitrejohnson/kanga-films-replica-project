
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, Download, Star } from "lucide-react";

const TranslatorPage = () => {
  const { translator } = useParams<{ translator: string }>();
  
  // Convert URL slug back to readable name
  const translatorName = translator?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || "Unknown Translator";

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

            <div className="mt-6">
              <h3 className="text-lg font-medium text-white mb-3">Languages Expertise</h3>
              <div className="grid grid-cols-2 gap-2">
                <span className="bg-red-600 text-white px-3 py-1 rounded text-sm text-center">Kinyarwanda</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm text-center">English</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm text-center">French</span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm text-center">Swahili</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Work Section */}
        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Ready to Work</h2>
          <p className="text-gray-300 mb-4">
            {translatorName} is available for immediate movie translation projects with full access to all movie content and parts.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Start Translation Project
            </button>
            <button className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              View Portfolio
            </button>
            <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Contact Translator
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TranslatorPage;
