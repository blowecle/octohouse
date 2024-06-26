const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();

// middleware
app.use(express.static(path.join(__dirname, "../build")));
app.use(express.json());
app.use(cors());
app.use(volleyball);
app.use(express.urlencoded({ extended: true }));

// api router
app.use("/api", require("./api"));

// catch-all
app.use("*", (res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

module.exports = app;
