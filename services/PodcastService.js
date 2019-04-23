const podcall = require('../apis/podcast');

class PodcastService {
    constructor(){}
 
    async getResponse () {
        try {
            const response = await podcall.get('/search')
            console.log(response.data.results);
            for( let i = 0; i < response.data.results.length; i++ ) {
                            console.log(response.data.results[i].title_original);
                            console.log(response.data.results[i].description_original);
                            console.log('                                              ');
                        }
        } catch (error) {
            console.error(error);
          }
    }
 }

module.exports = PodcastService;