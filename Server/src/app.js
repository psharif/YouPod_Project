//external
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

//internal
const youTube = require('./apis/youtube')
const transform = require('./helpers/transform')

//create instance of express
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.get('/videos', async (req, res) => {
  
  const query = {
    params: {
      q: req.query.term
    }
  }
  
  try {
    //get response from youtube
    const { data } = await youTube.get('/search', query)
    //transform response
    const videos = transform['videos'](data)
    //send videos
    res.json(videos)
  } catch(e) {
    res.json({ error: e.message})
  }
});

module.exports = app