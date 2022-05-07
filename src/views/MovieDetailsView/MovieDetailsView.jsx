import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import useMovieDetailsHook from "../../hooks/useMovieDetailsHook";
import s from "./movieDetails.module.scss";

export default function MovieDetailsView() {
  const movie = useMovieDetailsHook();
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = ()=>{
    navigate(location?.state?.pathname ?? '/');
  }

  return (
    <>
      <main className={s.movie}>
        <span className={s.movie_back} onClick={()=>goBack()}>
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
                <Link to={"cast"}>Cast</Link>
              </li>

              <li className={s.movie_add_item}>
                <Link to={"reviews"}>Reviews</Link>
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
