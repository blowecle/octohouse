import { Route, Routes } from "react-router-dom";

import Home from "./artifact/Home";
import ArtistView from "./artists/ArtistView";
import Events from "./events/Events";
import Blog from "./blog/Blog";

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists/:id" element={<ArtistView/>} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    )
}

export default Router;