import React, { Component } from 'react';
import { Router } from "@reach/router"
import Header from './Header'
import Home from './Home'
import Video from './Video'
import Podcast from './Podcast'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return <Container text className="form">
      <Header name="YouPod" />
      <Router>
        <Home exact path="/"/>
        <Video path="/video" />
        <Podcast path="/podcast" />
      </Router> 
    </Container>
  }
}

export default App;
