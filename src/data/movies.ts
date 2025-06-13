
// Action Movies
const baseMovies = [
  {
    id: "1",
    title: "The Equalizer 3",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 8.5,
    year: "2023",
    genre: "Action"
  },
  {
    id: "2",
    title: "Black Widow",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 7.8,
    year: "2021",
    genre: "Action"
  },
  {
    id: "3",
    title: "Captain America",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 8.1,
    year: "2022",
    genre: "Action"
  },
  {
    id: "4",
    title: "Thor",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 7.5,
    year: "2021",
    genre: "Action"
  },
  {
    id: "5",
    title: "Venom",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 7.2,
    year: "2022",
    genre: "Action"
  },
  {
    id: "6",
    title: "Avengers",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 8.9,
    year: "2022",
    genre: "Action"
  },
  {
    id: "7",
    title: "Iron Man",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 8.3,
    year: "2023",
    genre: "Action"
  },
  {
    id: "8",
    title: "Spider-Man",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 8.7,
    year: "2023",
    genre: "Action"
  },
  {
    id: "9",
    title: "Fast & Furious",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 7.9,
    year: "2023",
    genre: "Action"
  },
  {
    id: "10",
    title: "John Wick",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 9.1,
    year: "2023",
    genre: "Action"
  },
  {
    id: "11",
    title: "Mission Impossible",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 8.6,
    year: "2023",
    genre: "Action"
  },
  {
    id: "12",
    title: "The Batman",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 8.4,
    year: "2022",
    genre: "Action"
  },
  {
    id: "13",
    title: "Wonder Woman",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 8.2,
    year: "2022",
    genre: "Action"
  },
  {
    id: "14",
    title: "Aquaman",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 7.6,
    year: "2023",
    genre: "Action"
  },
  {
    id: "15",
    title: "Deadpool",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 8.8,
    year: "2023",
    genre: "Action"
  },

  // Sci-Fi Movies
  {
    id: "16",
    title: "Matrix Reloaded",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 9.2,
    year: "2003",
    genre: "Sci-Fi"
  },
  {
    id: "17",
    title: "The Terminator",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 9.0,
    year: "1984",
    genre: "Sci-Fi"
  },
  {
    id: "18",
    title: "Blade Runner 2049",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 8.9,
    year: "2017",
    genre: "Sci-Fi"
  },
  {
    id: "19",
    title: "Interstellar",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 9.3,
    year: "2014",
    genre: "Sci-Fi"
  },
  {
    id: "20",
    title: "Star Wars",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 9.1,
    year: "2023",
    genre: "Sci-Fi"
  },
  {
    id: "21",
    title: "Guardians of Galaxy",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 8.5,
    year: "2023",
    genre: "Sci-Fi"
  },
  {
    id: "22",
    title: "Avatar",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 8.7,
    year: "2022",
    genre: "Sci-Fi"
  },
  {
    id: "23",
    title: "Dune",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 8.6,
    year: "2021",
    genre: "Sci-Fi"
  },
  {
    id: "24",
    title: "Alien",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 8.8,
    year: "2023",
    genre: "Sci-Fi"
  },
  {
    id: "25",
    title: "Ex Machina",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 8.4,
    year: "2015",
    genre: "Sci-Fi"
  },

  // Drama Movies
  {
    id: "26",
    title: "Vikings",
    poster: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop",
    rating: 8.8,
    year: "2023",
    genre: "Drama"
  },
  {
    id: "27",
    title: "The Crown",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 8.9,
    year: "2023",
    genre: "Drama"
  },
  {
    id: "28",
    title: "Breaking Bad",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 9.5,
    year: "2022",
    genre: "Drama"
  },
  {
    id: "29",
    title: "The Godfather",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 9.6,
    year: "1972",
    genre: "Drama"
  },
  {
    id: "30",
    title: "Shawshank Redemption",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 9.7,
    year: "1994",
    genre: "Drama"
  },

  // Thriller Movies
  {
    id: "31",
    title: "Vivarium",
    poster: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop",
    rating: 6.9,
    year: "2019",
    genre: "Thriller"
  },
  {
    id: "32",
    title: "Gone Girl",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 8.1,
    year: "2014",
    genre: "Thriller"
  },
  {
    id: "33",
    title: "Se7en",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 8.6,
    year: "1995",
    genre: "Thriller"
  },
  {
    id: "34",
    title: "Zodiac",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 7.7,
    year: "2007",
    genre: "Thriller"
  },
  {
    id: "35",
    title: "The Silence of the Lambs",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 8.6,
    year: "1991",
    genre: "Thriller"
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
  
  const additionalMovies = [];
  
  for (let i = 36; i <= 1200; i++) {
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const baseTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    const year = 2010 + Math.floor(Math.random() * 14); // Random year between 2010-2023
    const rating = (6.0 + Math.random() * 3.5).toFixed(1); // Random rating between 6.0-9.5
    const imageId = 1500000000000 + Math.floor(Math.random() * 100000000);
    
    additionalMovies.push({
      id: i.toString(),
      title: `${baseTitle} ${Math.floor(Math.random() * 10) + 1}`,
      poster: `https://images.unsplash.com/photo-${imageId}?w=400&h=600&fit=crop`,
      rating: parseFloat(rating),
      year: year.toString(),
      genre: genre
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
