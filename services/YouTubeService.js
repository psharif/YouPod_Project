const youtube = require('../apis/youtube');

class YouTubeService {
   constructor(){}

   async getResponse () {
     const response = await youtube.get('/search', {
       params: {
         q: 'trucks'
       }
     });
     console.log(response.data.items);
  }
}

module.exports = YouTubeService;
