const express = require('express');
const youTubeService = require('./services/YouTubeService');
const podcastCall = require('./services/PodcastService');
const app = express();
const bodyParser = require("body-parser");
const keys = require("./config/keys");

app.use(bodyParser.json());

let ytService = new youTubeService();
//ytService.getVideos('trucks').then(console.log);

app.get('/videos', (req, res) => {

  const ytService = new youTubeService();

  ytService.getVideos('trucks')
    .then( videos => res.json(videos) );

});

let podService = new podcastCall();
podService.getResponse();

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("express is working on port " + PORT);
});
