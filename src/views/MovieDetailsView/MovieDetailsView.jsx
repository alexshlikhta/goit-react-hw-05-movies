import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useMovieDetailsHook from "../../hooks/useMovieDetailsHook";
import s from "./movieDetails.module.scss";

export default function MovieDetailsView() {
  const movie = useMovieDetailsHook();
  const navigate = useNavigate();

  return (
    <>
      <main className={s.movie}>
        <span className={s.movie_back} onClick={() => navigate(-1)}>
          ← Go back
        </span>

        {movie && (
          <>
            <div className={s.movie_box}>
              <div className={s.movie_box_pic}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
              </div>

              <div className={s.movie_box_desc}>
                <h1>{movie.title ? movie.title : movie.original_name}</h1>

                <span className={s.movie_box_desc__title}>
                  <b>User Score:</b> {movie.vote_average}
                </span>
                <span className={s.movie_box_desc__title}>
                  <b>Total votes:</b> {movie.vote_count}
                </span>
                <span className={s.movie_box_desc__title}>
                  <b>Overview:</b> {movie.overview}
                </span>
                <span className={s.movie_box_desc__title}>
                  <b>Genres:</b>{" "}
                  <ul>
                    {movie.genres.map((genre, index) => (
                      <li key={index}>{genre.name}</li>
                    ))}
                  </ul>
                </span>
              </div>
            </div>

            <span className={s.movie_box_desc__title}>Additional Information</span>

            <ul className={s.movie_add}>
              <li className={s.movie_add_item}>
                <NavLink to={"cast"}>Cast</NavLink>
              </li>

              <li className={s.movie_add_item}>
                <NavLink to={"reviews"}>Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
          </>
        )}

        {!movie && <h1 className={s.movie_error}>Something went srong...</h1>}
      </main>
    </>
  );
}
