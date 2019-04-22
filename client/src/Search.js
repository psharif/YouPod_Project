import React from 'react'
import { Input, Button, Divider } from 'semantic-ui-react'
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
  
  render = () => {
    const { query } = this.state
    return (
    <div>
      <Input fluid size='massive' icon='search' onChange={this.onChange} placeholder='Search...' />
      <Divider horizontal></Divider>
      <div className="buttons">
        <Link to='/video' state={{ query }}><Button size='massive' primary style={{ color: 'black'}}>Video</Button></Link>
        <Link to='/podcast' state={{ query }}><Button size='massive' secondary style={{ color: '#2185d0'}}>Podcast</Button></Link>
      </div>
    </div>
    )
  }
}