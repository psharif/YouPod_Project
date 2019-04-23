const express = require('express');
const youTubeService = require('./services/YouTubeService');
const podcastcall = require('./apis/podcast');
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const keys = require("./config/keys");

app.use(bodyParser.json());
// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// let ytService = new youTubeService();

// ytService.getResponse();

podcastcall();

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("express is working on port " + PORT);
});
