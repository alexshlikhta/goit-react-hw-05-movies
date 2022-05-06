import "./App.scss";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

function getAsyncView({ name, type }) {
  if (type === "component") {
    return lazy(() => import(`./components/${name}`));
  }
  return lazy(() => import(`./views/${name}`));
}

const AsyncHomeView = getAsyncView({ name: "HomeView", type: "view" });
const AsyncMoviesView = getAsyncView({ name: "MoviesView", type: "view" });
const AsyncLayoutView = getAsyncView({ name: "LayoutView", type: "view" });
const AsyncNotFoundView = getAsyncView({ name: "NotFoundView", type: "view" });
const AsyncMovieDetailsView = getAsyncView({ name: "MovieDetailsView", type: "view" });
const AsyncMovieCast = getAsyncView({ name: "MovieCast", type: "component" });
const AsyncMovieReviews = getAsyncView({ name: "MovieReviews", type: "component" });

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
