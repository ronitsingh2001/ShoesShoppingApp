import React, { Component } from 'react'
import vid from '../assets/vid.mov'

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="container flex catalogue">
            <video className='vid ' loop  autoPlay muted  src={vid} />
        </div>
      </div>
    )
  }
}
