const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Parcel management server is running smoothly");
});

app.all("*", (req, res, next) => {
  const error = new Error(`The requested URL is invalid : [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message,
  });
});


module.exports = app;
