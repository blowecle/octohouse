const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();

// middleware
app.use(express.static(path.join(__dirname, "../build")));
app.use('/', express.static(path.join(__dirname, 'src', 'images')));
app.use(express.json());
const corsOptions = {
  origin: ['https://www.octopushouse.com', 'https://main--octopushouse.netlify.app', 'http://localhost:3000', 'http://localhost:3001'],
};

// Enable CORS only for specific origins
app.use(cors(corsOptions));

app.use(volleyball);
app.use(express.urlencoded({ extended: true }));

// api router
app.use("/api", require("./api"));

// catch-all
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

// error handling here
module.exports = app;
