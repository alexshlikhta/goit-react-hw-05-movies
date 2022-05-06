import React from "react";
import { NavLink } from "react-router-dom";
import useMovieListHook from "../../hooks/useMovieListHook";
import s from './homeView.module.scss';

export default function HomeView() {
  const movies = useMovieListHook();

    return (
      <>
        {movies && (
          <main className={s.list}>
            <h1>Top 20 list</h1>
          <ul className={s.list_box} >
            {movies.map((movie) => (
              <li className={s.list_box_el} key={movie.id} >
                <NavLink to={`movies/${movie.id}`}>
                  {movie.title ? movie.title : movie.original_name}
                </NavLink>
              </li>
            ))}
          </ul>
          </main>
        )}
      </>
    );
};
