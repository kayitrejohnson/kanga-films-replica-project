
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SeriesCard from "./SeriesCard";

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

interface SeriesGridProps {
  title: string;
  series: Series[];
}

const SeriesGrid = ({ title, series }: SeriesGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const seriesPerPage = 30;
  
  const displayedSeries = showAll 
    ? series.slice(0, currentPage * seriesPerPage)
    : series.slice(0, 18);

  const hasMoreSeries = series.length > displayedSeries.length;

  const loadMore = () => {
    if (!showAll) {
      setShowAll(true);
      setCurrentPage(2);
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  const showLess = () => {
    setShowAll(false);
    setCurrentPage(1);
  };

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <span className="text-gray-400 text-sm">
          {displayedSeries.length} of {series.length} series
        </span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {displayedSeries.map((show) => (
          <SeriesCard key={show.id} series={show} />
        ))}
      </div>
      
      <div className="text-center mt-8 space-x-4">
        {hasMoreSeries && (
          <Button 
            onClick={loadMore}
            variant="outline"
            className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
          >
            Load More Series ({series.length - displayedSeries.length} remaining)
          </Button>
        )}
        
        {showAll && displayedSeries.length > 18 && (
          <Button 
            onClick={showLess}
            variant="outline"
            className="bg-gray-700 border-gray-500 text-white hover:bg-gray-600"
          >
            Show Less
          </Button>
        )}
      </div>
    </section>
  );
};

export default SeriesGrid;

