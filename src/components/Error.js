import React, { Component } from 'react'
import Loading from './Loading'

export class Error extends Component {
  render() {
    return (
      <div>
        <h1>Error..................... <Loading/></h1>
      </div>
    )
  }
}

export default Error
