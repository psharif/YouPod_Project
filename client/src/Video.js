import React from 'react';

///Youtube API Key:  AIzaSyA0xgo7G8Cto8er6vcor07JUF5D6qQAeu4

class Video extends React.Component {

  state = {};

  render() {
    return(
      <div>
        <h1>Video</h1>
        <h3>Query: {this.props.location.state.query || ''}</h3>
      </div>
    );
  }
}

export default Video;
