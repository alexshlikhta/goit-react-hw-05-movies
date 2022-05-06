import { useEffect, useState } from "react";
import * as movieAPI from "../services/MovieAPI";

export default function useMovieListHook() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
      movieAPI.getAllMovies().then(setMovies);
    }, [movies]);

    return movies;
};
