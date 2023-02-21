import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./artifact/Home";
import Blog from "./blog/Blog";
import Story from "./story/Story";
import ArtifactView from "./artifact/ArtifactView";

const Router = () => {

    return (

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/artifacts" element={<Home />} />
            <Route path="/artifacts/:id" element={<ArtifactView />} />
            <Route path="/story" element={<Story />} />
            <Route path="/blog" element={<Blog />}/>
        </Routes>
    )
}

export default Router;