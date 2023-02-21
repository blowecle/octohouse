const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();

// middleware
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.use(cors());
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api router
app.use("/api", require("./api"));

app.get('/test', (req, res) => {
  res.send('Hello World!')
});

// catch-all
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// error handling here
module.exports = app;