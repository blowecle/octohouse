import React from "react";
import { Link } from "react-router-dom";

const EventsFooter = () => {
    return (
        <Link to="/" className="events-footer">
            <div className="events-footer-content">BACK TO GALLERY</div>
        </Link>
    );
};

export default EventsFooter;