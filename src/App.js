import React, { Component } from 'react';
import Search from './Search'
import Header from './Header'
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
      <Search />
    </Container>
  }
}

export default App;
