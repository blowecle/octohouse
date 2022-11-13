import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Artists from "./Artists";

const Router = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
        </Routes>
    )
}

export default Router;