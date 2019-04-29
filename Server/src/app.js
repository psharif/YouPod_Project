const express = require('express');
const youTubeService = require('./services/YouTubeService');
const bodyParser = require("body-parser");
const cors = require('cors');

//create instance of express
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.get('/videos', async (req, res) => {

  const ytService = new youTubeService();

  try {
    const videos = await ytService.getVideos(req.query.term)
    res.json(videos)
  } catch(e){
    res.json({ error: e.message})
  }

});

module.exports = app