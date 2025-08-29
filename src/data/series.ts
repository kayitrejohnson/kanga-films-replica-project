
// TV Series and Shows data
const baseSeries = [
  {
    id: "s1",
    title: "Breaking Bad",
    poster: "/lovable-uploads/series/breaking-bad-poster.jpg",
    rating: 9.5,
    year: "2008-2013",
    genre: "Crime Drama",
    seasons: 5,
    episodes: 62,
    videoUrl: "/lovable-uploads/videos/breaking-bad-trailer.mp4",
    backdrop: "/lovable-uploads/series/breaking-bad-backdrop.jpg",
    duration: "47 min/episode",
    description: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's future.",
    creator: "Vince Gilligan",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"]
  },
  {
    id: "s2",
    title: "Game of Thrones",
    poster: "/lovable-uploads/series/game-of-thrones-poster.jpg",
    rating: 9.0,
    year: "2011-2019",
    genre: "Fantasy Drama",
    seasons: 8,
    episodes: 73,
    videoUrl: "/lovable-uploads/videos/game-of-thrones-trailer.mp4",
    backdrop: "/lovable-uploads/series/game-of-thrones-backdrop.jpg",
    duration: "57 min/episode",
    description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    creator: "David Benioff, D.B. Weiss",
    cast: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"]
  },
  {
    id: "s3",
    title: "Stranger Things",
    poster: "/lovable-uploads/series/stranger-things-poster.jpg",
    rating: 8.7,
    year: "2016-2025",
    genre: "Sci-Fi Horror",
    seasons: 5,
    episodes: 42,
    videoUrl: "/lovable-uploads/videos/stranger-things-trailer.mp4",
    backdrop: "/lovable-uploads/series/stranger-things-backdrop.jpg",
    duration: "51 min/episode",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.",
    creator: "The Duffer Brothers",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"]
  }
];

// Generate more series programmatically
const generateMoreSeries = () => {
  const genres = ["Drama", "Comedy", "Thriller", "Sci-Fi", "Crime", "Horror", "Romance", "Action", "Fantasy", "Mystery"];
  const seriesTitles = [
    "The Crown", "House of Cards", "Ozark", "Narcos", "The Witcher", "Mandalorian", "Vikings", 
    "Westworld", "True Detective", "Sherlock", "Friends", "The Office", "How I Met Your Mother",
    "Prison Break", "24", "Lost", "Heroes", "Dexter", "Walking Dead", "Better Call Saul",
    "House of the Dragon", "Rings of Power", "The Boys", "Succession", "Euphoria", "Yellowstone"
  ];
  
  const sampleVideos = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  ];
  
  const additionalSeries = [];
  
  for (let i = 4; i <= 500; i++) {
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const baseTitle = seriesTitles[Math.floor(Math.random() * seriesTitles.length)];
    const year = 2010 + Math.floor(Math.random() * 14);
    const endYear = year + Math.floor(Math.random() * 8) + 1;
    const rating = (6.0 + Math.random() * 3.5).toFixed(1);
    const seasons = Math.floor(Math.random() * 10) + 1;
    const episodes = seasons * (Math.floor(Math.random() * 15) + 6);
    const imageId = 1500000000000 + Math.floor(Math.random() * 100000000);
    const videoUrl = sampleVideos[Math.floor(Math.random() * sampleVideos.length)];
    const duration = `${40 + Math.floor(Math.random() * 25)} min/episode`;
    
    additionalSeries.push({
      id: `s${i}`,
      title: `${baseTitle} ${Math.floor(Math.random() * 5) + 1}`,
      poster: `/lovable-uploads/series/series-${i}-poster.jpg`,
      rating: parseFloat(rating),
      year: `${year}-${endYear}`,
      genre: genre,
      seasons: seasons,
      episodes: episodes,
      videoUrl: `/lovable-uploads/videos/series-${i}-trailer.mp4`,
      backdrop: `/lovable-uploads/series/series-${i}-backdrop.jpg`,
      duration: duration,
      description: `An epic ${genre.toLowerCase()} series that delivers compelling storytelling and unforgettable characters.`,
      creator: "Various Creators",
      cast: ["Lead Actor", "Supporting Actor", "Featured Actor"]
    });
  }
  
  return additionalSeries;
};

const additionalSeries = generateMoreSeries();
export const series = [...baseSeries, ...additionalSeries];

export const featuredSeries = series.filter(show => show.rating >= 8.5).slice(0, 50);
export const dramaSeries = series.filter(show => show.genre.includes("Drama"));
export const comedySeries = series.filter(show => show.genre === "Comedy");
export const scifiSeries = series.filter(show => show.genre.includes("Sci-Fi"));
export const crimeSeries = series.filter(show => show.genre.includes("Crime"));
export const recentSeries = series.filter(show => parseInt(show.year.split('-')[1]) >= 2020).slice(0, 100);

