import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Artists from "./Artists";
import SingleArtist from "./SingleArtist";

const Router = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:id" element={<SingleArtist />} />
        </Routes>
    )
}

export default Router;