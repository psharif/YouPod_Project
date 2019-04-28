import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default (props) => {
  return (
  <Header as='h1' icon textAlign='center'>
    <Icon name='universal access' color="black" inverted/>
    <Header.Content>{props.name}</Header.Content>
  </Header>
)
}