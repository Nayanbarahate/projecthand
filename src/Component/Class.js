import React, { Component } from 'react'
import './style.css'


export default class Class extends Component {
  render() {
    return (<div className='right'>
      <h1>This is created using Class Component</h1>
    <p>This is done using external CSS</p>
    <p style={{color:'red'}}>This is done using inline CSS</p>
    </div>
    )
  }
}
