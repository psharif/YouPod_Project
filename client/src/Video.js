import React from 'react';

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
