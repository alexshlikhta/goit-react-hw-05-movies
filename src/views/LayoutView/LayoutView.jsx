import React from "react";
import { Outlet } from "react-router-dom";
import MovieNav from "../../components/MovieNav";

export default function LayoutView() {
    return (
        <>
            <MovieNav />
            <Outlet/>
        </>
    );
};
