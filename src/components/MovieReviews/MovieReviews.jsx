import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as movieAPI from "../../services/MovieAPI";
import s from "./movieReviews.module.scss";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieAPI.getMovieReviews(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <ul className={s.reviews}>
          {movie.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3> {content}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
