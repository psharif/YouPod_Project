import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import { Link } from "@reach/router"

export default class Search extends React.Component { 
  state = {
    query: ''
  }

  onChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }
  
  render = () => <div>
    <Input onChange={this.onChange} placeholder='Search...' />
    <div>
      <Button primary><Link to='/video' state={{query: this.state.query}} style={{ color: 'black' }}>Video</Link></Button>
      <Button secondary><Link to='/podcast' state={{query: this.state.query}}>Podcast</Link></Button>
    </div>
  </div>
}