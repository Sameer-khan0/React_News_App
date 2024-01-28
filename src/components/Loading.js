import React, { Component } from 'react'
import Spinner from './Walk.gif'

export class Loading extends Component {
  render() {
    return (
      <div>
          <div style={{display: 'flex' , justifyContent: 'center'}}>
       <img src={Spinner} alt='loading' />
          </div>
      </div>
    )
  }
}

export default Loading
