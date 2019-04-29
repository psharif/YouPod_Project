import React from 'react';
import Axios from 'axios';
///Youtube API Key:  AIzaSyA0xgo7G8Cto8er6vcor07JUF5D6qQAeu4

class Video extends React.Component {

  state = {
    videos: []
  };

  componentDidMount() {
    Axios.get('/videos', {
      params: {
        term: this.props.location.state.query || ''
      }
     })
      .then(response => {
        this.setState({
          videos: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { videos } = this.state;
    return(
      <div>
        <h1>Video</h1>
        <h3>Query: {this.props.location.state.query || ''}</h3>
        { videos.map( (video, indx) => <img src={video.thumbnail} key={`${indx}`} alt={`${video.title}`}/> ) }
      </div>
    );
  }

}

export default Video;
