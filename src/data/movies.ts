// Action Movies
const baseMovies = [
  {
    id: "1",
    title: "The Equalizer 3",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 8.5,
    year: "2023",
    genre: "Action",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",
    duration: "109 min",
    description: "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    director: "Antoine Fuqua",
    cast: ["Denzel Washington", "Dakota Fanning", "Eugenio Mastrandrea"]
  },
  {
    id: "2",
    title: "Black Widow",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 7.8,
    year: "2021",
    genre: "Action",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    backdrop: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1920&h=1080&fit=crop",
    duration: "134 min",
    description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    director: "Cate Shortland",
    cast: ["Scarlett Johansson", "Florence Pugh", "David Harbour"]
  },
  {
    id: "3",
    title: "Captain America",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 8.1,
    year: "2022",
    genre: "Action",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    backdrop: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=1920&h=1080&fit=crop",
    duration: "124 min",
    description: "Steve Rogers struggles to embrace his role in the modern world and battles a new threat from old history.",
    director: "Russo Brothers",
    cast: ["Chris Evans", "Scarlett Johansson", "Sebastian Stan"]
  },
  {
    id: "4",
    title: "Thor",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 7.5,
    year: "2021",
    genre: "Action",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",
    duration: "115 min",
    description: "Thor must prevent Ragnarok, the destruction of his homeworld and the end of Asgardian civilization.",
    director: "Taika Waititi",
    cast: ["Chris Hemsworth", "Cate Blanchett", "Tom Hiddleston"]
  },
  {
    id: "5",
    title: "Venom",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 7.2,
    year: "2022",
    genre: "Action",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    backdrop: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1920&h=1080&fit=crop",
    duration: "112 min",
    description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth.",
    director: "Ruben Fleischer",
    cast: ["Tom Hardy", "Michelle Williams", "Riz Ahmed"]
  }
];

// Generate more movies programmatically to reach 1000+ movies
const generateMoreMovies = () => {
  const genres = ["Action", "Sci-Fi", "Drama", "Thriller", "Comedy", "Horror", "Romance", "Adventure", "Fantasy", "Mystery"];
  const movieTitles = [
    "Dark Phoenix", "The Matrix", "Inception", "Gladiator", "Titanic", "Avatar", "Pulp Fiction", 
    "The Dark Knight", "Forrest Gump", "Fight Club", "Goodfellas", "The Lord of the Rings",
    "Star Wars", "Jurassic Park", "Terminator", "Alien", "Predator", "Rocky", "Rambo",
    "Die Hard", "Lethal Weapon", "Speed", "Heat", "Casino", "Scarface", "The Departed",
    "Shutter Island", "The Prestige", "Memento", "Interstellar", "Gravity", "Mad Max",
    "Blade Runner", "The Fifth Element", "Total Recall", "Minority Report", "I Am Legend",
    "World War Z", "Zombieland", "The Walking Dead", "Game of Thrones", "Breaking Bad",
    "The Sopranos", "Lost", "Prison Break", "24", "Heroes", "Dexter", "House of Cards",
    "Stranger Things", "The Witcher", "Mandalorian", "House of the Dragon", "Rings of Power"
  ];
  
  const sampleVideos = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  ];
  
  const additionalMovies = [];
  
  for (let i = 6; i <= 1200; i++) {
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const baseTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    const year = 2010 + Math.floor(Math.random() * 14);
    const rating = (6.0 + Math.random() * 3.5).toFixed(1);
    const imageId = 1500000000000 + Math.floor(Math.random() * 100000000);
    const videoUrl = sampleVideos[Math.floor(Math.random() * sampleVideos.length)];
    const duration = `${90 + Math.floor(Math.random() * 60)} min`;
    
    additionalMovies.push({
      id: i.toString(),
      title: `${baseTitle} ${Math.floor(Math.random() * 10) + 1}`,
      poster: `https://images.unsplash.com/photo-${imageId}?w=400&h=600&fit=crop`,
      rating: parseFloat(rating),
      year: year.toString(),
      genre: genre,
      videoUrl: videoUrl,
      backdrop: `https://images.unsplash.com/photo-${imageId}?w=1920&h=1080&fit=crop`,
      duration: duration,
      description: `An epic ${genre.toLowerCase()} movie that delivers thrilling entertainment and unforgettable moments.`,
      director: "Various Directors",
      cast: ["Star Actor", "Supporting Actor", "Featured Actor"]
    });
  }
  
  return additionalMovies;
};

const additionalMovies = generateMoreMovies();
export const movies = [...baseMovies, ...additionalMovies];

export const featuredMovies = movies.filter(movie => movie.rating >= 8.5).slice(0, 100);
export const actionMovies = movies.filter(movie => movie.genre === "Action");
export const scifiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
export const recentMovies = movies.filter(movie => parseInt(movie.year) >= 2020).slice(0, 150);
export const dramaMovies = movies.filter(movie => movie.genre === "Drama");
export const thrillerMovies = movies.filter(movie => movie.genre === "Thriller");
export const comedyMovies = movies.filter(movie => movie.genre === "Comedy");
export const horrorMovies = movies.filter(movie => movie.genre === "Horror");
export const romanceMovies = movies.filter(movie => movie.genre === "Romance");
export const adventureMovies = movies.filter(movie => movie.genre === "Adventure");
export const fantasyMovies = movies.filter(movie => movie.genre === "Fantasy");
export const mysteryMovies = movies.filter(movie => movie.genre === "Mystery");
