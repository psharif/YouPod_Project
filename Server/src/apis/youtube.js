const axios = require('axios');

module.exports = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults: 5,
    key: 'AIzaSyA0xgo7G8Cto8er6vcor07JUF5D6qQAeu4'
  }
});
