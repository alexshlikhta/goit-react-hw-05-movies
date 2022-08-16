import "./App.scss";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const AsyncHomeView = lazy(() => import(`./views/HomeView`));
const AsyncMoviesView = lazy(() => import(`./views/MoviesView`));
const AsyncLayoutView = lazy(() => import(`./views/LayoutView`));
const AsyncNotFoundView = lazy(() => import(`./views/NotFoundView`));
const AsyncMovieDetailsView = lazy(() => import(`./views/MovieDetailsView`));

const AsyncMovieCast = lazy(() => import(`./components/MovieCast`));
const AsyncMovieReviews = lazy(() => import(`./components/MovieReviews`));

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<AsyncLayoutView />}>
          <Route index element={<AsyncHomeView />} />

          <Route path="movies" element={<AsyncMoviesView />} />

          <Route path="movies/:movieId" element={<AsyncMovieDetailsView />}>
            <Route path="cast" element={<AsyncMovieCast />} />

            <Route path="reviews" element={<AsyncMovieReviews />} />
          </Route>

          <Route path="*" element={<AsyncNotFoundView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
