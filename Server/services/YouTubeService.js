const youtube = require('../apis/youtube');

class YouTubeService {

   constructor() {}

   async getVideos (term) {
     const videos = [];

     const response = await youtube.get('/search', {
       params: {
         q: term
       }
     });

     for(let video of response.data.items) {
        const v = {
          thumbnail: video.snippet.thumbnails.medium.url,
          title: video.snippet.title
        };
        videos.push(v);
     };

     return videos;
   }

}

module.exports = YouTubeService;
