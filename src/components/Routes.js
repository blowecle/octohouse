import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blog from "./blog/Blog";
import Story from "./story/Story";

const Router = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
    )
}

export default Router;