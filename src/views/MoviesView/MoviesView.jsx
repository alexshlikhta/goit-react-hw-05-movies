import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import MovieSearch from "../../components/MovieSearch";
import * as movieAPI from "../../services/MovieAPI";
import s from "./moviesView.module.scss";

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();

  const handleSubmit = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    if (query === "" && !searchParams.get('query')) return;

    if(searchParams.get('query')) {
      let queriedValue = searchParams.get('query').toLowerCase().trim();
      movieAPI.getQueriedMovie(queriedValue).then((res) => setMovies(res.results));
    } else {
      let queriedValue = query.toLowerCase().trim();
      movieAPI.getQueriedMovie(queriedValue).then((res) => setMovies(res.results));
    }

  }, [query, searchParams]);

  return (
    <>
      <main>
        <MovieSearch onSubmit={handleSubmit} />

        <ul className={s.search}>
          {movies &&
            movies.map(({ id, title, poster_path }) => (
              <li className={s.search_el} key={id}>
                <NavLink to={`/movies/${id}`}>
                  <div className={s.search_el_pic}>
                    {poster_path ? (
                      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
                    ) : (
                      <img src={"https://miro.medium.com/max/400/1*Y9-6_bh5a00rJWWoQ28NMQ.jpeg"} alt="character" />
                    )}
                  </div>

                  <div className={s.search_el_desc}>
                    <span className={s.search_el_desc__title}>
                      <b>Name:</b> {title ? title : "Not found"}
                    </span>
                  </div>
                </NavLink>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
