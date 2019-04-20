import React, { Component } from 'react';
import { Router } from "@reach/router"
import Header from './Header'
import Home from './Home'
import Video from './Video'
import Podcast from './Podcast'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return <Container className="form" verticalAlign='middle'>
    <style> 
      {`
      body > div > div.form,
      {
        width: 100%;
        height: 100%;
      }
    `}
    </style>
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
