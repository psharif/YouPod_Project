import React from 'react';
import Axios from 'axios';
///Youtube API Key:  AIzaSyA0xgo7G8Cto8er6vcor07JUF5D6qQAeu4

class Video extends React.Component {

  componentDidMount() {
    Axios.get('http://localhost:5000/videos')
      .then(response => {
        this.setState({
          videos: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  state = {
    videos: []
  };

  render() {
    return(
      <div>
        <h1>Video</h1>
        <h3>Query: {this.props.location.state.query || ''}</h3>
        {
          this.state.videos.map( (video)=> {
            return <img src={video.thumbnail} />
          })
        }
      </div>
    );
  }
}

export default Video;
