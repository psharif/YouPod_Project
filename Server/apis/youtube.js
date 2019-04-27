const axios = require('axios');
const keys = require('../config/keys')

module.exports = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults: 5,
    key: keys.youtubeKey
  }
});
