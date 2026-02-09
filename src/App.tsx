import React from "react";
import "./App.css";
import { Movie } from "./types/movie";
import { fetchMovies } from "./services/movieService";
import { Toaster, toast } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieGrid from "./components";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import MovieModal from "./components/MovieModal/MovieModal";

export default function App() {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);
  async function handleSearch(query: string) {
try {
  setMovies([]);
  setError(false);
  setIsLoading(true);
  const movies = await fetchMovies(query);
if (movies.length === 0) {
  toast.error("No movies found");
}
  setMovies(movies);
} catch  {
  setError(true);
}
finally {
  setIsLoading(false);
}
}
return ()
}