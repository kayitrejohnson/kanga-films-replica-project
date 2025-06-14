
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
            Professional translator services in Rwanda
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">About</h2>
          <p className="text-gray-300 mb-4">
            {translatorName} is a professional translator based in Rwanda, specializing in multiple languages including Kinyarwanda, English, French, and Swahili.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Services</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Document Translation</li>
                <li>• Movie Subtitling</li>
                <li>• Live Interpretation</li>
                <li>• Audio Translation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Languages</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Kinyarwanda (Native)</li>
                <li>• English (Fluent)</li>
                <li>• French (Fluent)</li>
                <li>• Swahili (Conversational)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TranslatorPage;
