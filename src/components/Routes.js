import { Route, Routes } from "react-router-dom";

import Home from "./artifact/Home";
import Blog from "./blog/Blog";
import Story from "./story/Story";
import ArtistView from "./artists/ArtistView";

const Router = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists/:id" element={<ArtistView/>} />
            <Route path="/story" element={<Story />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    )
}

export default Router;