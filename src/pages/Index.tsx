
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import MovieGrid from "../components/MovieGrid";
import Footer from "../components/Footer";
import { featuredMovies, actionMovies, scifiMovies, recentMovies } from "../data/movies";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MovieGrid title="Trending Now 🔥" movies={featuredMovies} />
        <MovieGrid title="Action Movies" movies={actionMovies} />
        <MovieGrid title="Sci-Fi Movies" movies={scifiMovies} />
        <MovieGrid title="Recently Added" movies={recentMovies} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
