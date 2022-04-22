const express = require("express");
const dotenv = require("dotenv");
const parser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

//middleware
app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// env variables
dotenv.config();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ msg: "ok" });
});

app.post("/add", async (req, res) => {
  console.log(`Recieved request: ${req.body.title}`);
  if (req.body.title == null) {
    return res.status(422).json({ detail: "missing parameters!" });
  }

  const title = req.body.title;
  const year = req.body.year;
  const url = "https://www.omdbapi.com/";
  const apiKey = process.env.API_KEY;

  const response = await axios.get(url, {
    params: { apikey: apiKey, t: title, y: year },
  });
  const data = response.data;

  if (data.Response) {
    const relevantDetails = {
      title: data.Title,
      rating: data.imdbRating,
      genre: data.Genre,
      plot: data.Plot,
      cast: data.Actors,
      poster: data.Poster,
      director: data.Director,
    };

    res.json(relevantDetails);
  } else {
    res.status(404).json({ detail: "Title not found!" });
  }
});

app.listen(
  PORT,
  console.log(`Server up and running on http://localhost:${PORT}...`)
);
