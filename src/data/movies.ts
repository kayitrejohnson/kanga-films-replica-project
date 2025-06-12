
export const movies = [
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
    title: "Matrix Reloaded",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 9.2,
    year: "2003",
    genre: "Sci-Fi"
  },
  {
    id: "3",
    title: "Black Widow",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 7.8,
    year: "2021",
    genre: "Action"
  },
  {
    id: "4",
    title: "Vivarium",
    poster: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop",
    rating: 6.9,
    year: "2019",
    genre: "Thriller"
  },
  {
    id: "5",
    title: "Captain America",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 8.1,
    year: "2022",
    genre: "Action"
  },
  {
    id: "6",
    title: "The Terminator",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    rating: 9.0,
    year: "1984",
    genre: "Sci-Fi"
  },
  {
    id: "7",
    title: "Thor",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 7.5,
    year: "2021",
    genre: "Action"
  },
  {
    id: "8",
    title: "Venom",
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    rating: 7.2,
    year: "2022",
    genre: "Action"
  },
  {
    id: "9",
    title: "Vikings",
    poster: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop",
    rating: 8.8,
    year: "2023",
    genre: "Drama"
  },
  {
    id: "10",
    title: "Avengers",
    poster: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 8.9,
    year: "2022",
    genre: "Action"
  }
];

export const featuredMovies = movies.slice(0, 6);
export const actionMovies = movies.filter(movie => movie.genre === "Action");
export const scifiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
export const recentMovies = movies.slice(0, 8);
