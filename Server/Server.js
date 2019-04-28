const express = require('express');
const youTubeService = require('./services/YouTubeService');
const podcastCall = require('./services/PodcastService');
const app = express();
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/videos', (req, res) => {

  const ytService = new youTubeService();

  ytService.getVideos(req.query.term)
    .then( videos => res.json(videos) );

});

let podService = new podcastCall();
podService.getResponse();

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("express is working on port " + PORT);
});
