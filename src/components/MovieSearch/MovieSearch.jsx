import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./movieSearch.module.scss";

export default function MovieSearch({ onSubmit }) {
  const [inputQuery, setInputQuery] = useState("");
  const navigate = useNavigate();


  const onSearchInputChange = (e) => {
    setInputQuery(e.target.value);
  };

  const onSearchBarSubmit = (e) => {
    e.preventDefault();

    let queriedValue = inputQuery.toLowerCase().trim();
    onSubmit(queriedValue);
    navigate(`?query=${queriedValue}`);
  };

  return (
    <>
      <form className={s.form} onSubmit={onSearchBarSubmit}>
        <input value={inputQuery} onChange={onSearchInputChange} placeholder="Search images and photos" />

        <button type="submit">
          <span className="button-label">Search</span>
        </button>
      </form>
    </>
  );
}
