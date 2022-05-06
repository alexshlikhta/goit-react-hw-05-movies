import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as movieAPI from "../services/MovieAPI";

export default function useMovieDetailsHook() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieAPI.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return movie
};

