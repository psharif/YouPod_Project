import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

export default class Search extends Component {

  render = () => { 
    return <div>
      <Input placeholder='Search...' />
      <div>
        <Button primary>Videos</Button>
        <Button secondary>Podcasts</Button>
      </div>
    </div>
  }
}