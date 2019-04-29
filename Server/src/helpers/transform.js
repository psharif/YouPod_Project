module.exports = {
  videos: ({ items }) => {
    const videos = []
    
    for(let item of items) {
      const v = {
        thumbnail: item.snippet.thumbnails.medium.url,
        title: item.snippet.title
      };
      videos.push(v);
    };
    return videos;
  },
  podcast: () => {}
}