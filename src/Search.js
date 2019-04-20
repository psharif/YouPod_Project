import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { Link } from "@reach/router"

export default class Search extends Component {

  render = () => { 
    return <div>
      <Input placeholder='Search...' />
      <div>
        <Button primary><Link to="/video" style={{ color: 'black' }}>Video</Link></Button>
        <Button secondary><Link to="/podcast">Podcast</Link></Button>
      </div>
    </div>
  }
}