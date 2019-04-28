const youtube = require('../apis/youtube');

class YouTubeService {

   constructor() {
     //this.videos = [];
   }

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

     //console.log(videos);

     return videos;
   }

}

module.exports = YouTubeService;
