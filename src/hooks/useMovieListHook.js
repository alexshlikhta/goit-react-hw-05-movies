import { useEffect, useState } from "react";
import * as movieAPI from "../services/MovieAPI";

export default function useMovieListHook() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      movieAPI.getAllMovies().then(setMovies);
    }, []);

    return movies;
};
