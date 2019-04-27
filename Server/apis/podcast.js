const keys = require('../config/keys');
const axios = require('axios');

module.exports = axios.create({
  baseURL: 'https://listen-api.listennotes.com/api/v2',
  headers: {'X-ListenAPI-Key': keys.podcastKey},
  params:{
    q: '49ers',
    type: 'podcast',
    len_min: 0,
    len_max: 5,
    language: 'English',
    safe_mode: 0
  }
});
