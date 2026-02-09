import type { Movie } from "../types/movie";
import axios from "axios";

const API_URL =
  "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";

interface FetchMoviesResponse {
  results: Movie[];
}
export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<FetchMoviesResponse>(API_URL, {
    params: {
      query: query,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });
  return response.data.results;
}
