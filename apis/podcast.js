const unirest = require('unirest');
const keys = require('../config/keys');
const KEY = '64126793557f4228a41630d59c6b7f47';
// const axios = require('axios');
console.log(keys.podcastKey);

const podcastCall = () => {
    unirest.get('https://listen-api.listennotes.com/api/v2/search?q=49ers&type=podcast&offset=0&len_min=0&len_max=5&only_in=title%2Cdescription&language=English&ocid=&ncid=&safe_mode=0')
    .header('X-ListenAPI-Key', keys.podcastKey)
    .end(function (response) {
        // console.log(response.body.results)
        for( let i = 0; i < response.body.results.length; i++ ) {
            console.log(response.body.results[i].rss);
            console.log(response.body.results[i].image);
            console.log(response.body.results[i].title_original);
            console.log(response.body.results[i].description_original);
            console.log('                                              ');
        }
    });
}

module.exports = podcastCall;

// module.exports = axios.create({
//   baseURL: 'https://listen-api.listennotes.com/api/v2',
//   params:{
//     key: KEY,
//     type: 'podcast'
//   }
// });
