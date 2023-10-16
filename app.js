require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;


app.get("/", (req, res) => {
  res.send("<h1> Welcome to Weather API </h1>");
})

app.get("/weather/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const apiKey = "979ff8545ea60e4b1afe0bcf3e887803";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    res.json(data);
  }
  catch (error) {
    res.status(500).json({ error: 'Unable to fetch weather data' })
  }
})

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
})
