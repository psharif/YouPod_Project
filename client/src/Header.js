import React from 'react'
import { Header } from 'semantic-ui-react'

export default (props) => {
  return <Header textAlign='center' as='h1'>{props.name}</Header>
}