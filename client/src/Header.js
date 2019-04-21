import React from 'react'
import { Header } from 'semantic-ui-react'

export default (props) => {
  return <Header as='h1'>{props.name}</Header>
}