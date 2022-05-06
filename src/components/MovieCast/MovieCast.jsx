import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as movieAPI from "../../services/MovieAPI";
import s from "./movieCast.module.scss";

export default function MovieCast() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieAPI.getMovieCredits(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <ul className={s.cast}>
        {movie &&
          movie.map(({ id, name, character, profile_path }) => (
            <li className={s.cast_el} key={id}>
              <div className={s.cast_el_pic}>
                {profile_path ?
                  <img src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="character" />
                  :
                  <img src={'https://miro.medium.com/max/400/1*Y9-6_bh5a00rJWWoQ28NMQ.jpeg'} alt="character" />
                }
              </div>

              <div className={s.cast_el_desc}>
                <span className={s.cast_el_desc__title}>
                  <b>Name:</b> {name ? name : ('Not found')} 
                </span>

                <span className={s.cast_el_desc__subtitle}>
                  <b>Role:</b> {character ? character : ('Not found')}
                </span>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
