import React from "react";
import { Link, useLocation } from "react-router-dom";
import useMovieListHook from "../../hooks/useMovieListHook";
import s from "./homeView.module.scss";

export default function HomeView() {
  const movies = useMovieListHook();
  const location = useLocation();

  return (
    <>
      {movies && (
        <main className={s.list}>
          <h1>Top 20 list</h1>
          <ul className={s.list_box}>
            {movies.map((movie) => (
              <li className={s.list_box_el} key={movie.id}>
                <Link
                  to={`movies/${movie.id}`} state={location} >
                  {movie.title ? movie.title : movie.original_name}
                </Link>
              </li>
            ))}
          </ul>
        </main>
      )}
    </>
  );
}
