import React from 'react'

export default ({ location }) => {
  return <div>
    <h1>Podcast</h1>
    <h3>Query: {location.state.query || ''}</h3>
  </div>
}