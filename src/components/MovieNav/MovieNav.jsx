import React from "react";
import { NavLink } from "react-router-dom";
import s from "./movieNav.module.scss";

export default function MovieNav() {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigation_ul}>
        <li className={s.navigation_li}>
          <NavLink className={s.navigation_a} exact="true" to="/" >
            Home
          </NavLink>
        </li>

        <li className={s.navigation_li}>
          <NavLink className={s.navigation_a} to="/movies" >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
