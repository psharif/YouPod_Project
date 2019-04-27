const youtube = require('../apis/youtube');

class YouTubeService {

   constructor() {
     this.videos = [];
   }

   async getResponse () {
     const response = await youtube.get('/search', {
       params: {
         q: 'trucks'
       }
     });

     for(let video of response.data.items) {
        const v = {
          thumbnail: video.snippet.thumbnails.medium.url,
          title: video.snippet.title
        };

        this.videos.push(v);
     };
   }

   getVideos(){
     return this.videos;
   }

}

module.exports = YouTubeService;
