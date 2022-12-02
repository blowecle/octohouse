import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Artists from "./Artists";
import SingleArtist from "./SingleArtist";
import StudioA from "./StudioA/StudioA";

const Router = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:id" element={<SingleArtist />} />
            <Route path="/artists/test" element={<StudioA />} />
        </Routes>
    )
}

export default Router;