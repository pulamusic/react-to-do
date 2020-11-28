
import React, { Component } from 'react'
import featureImg from '../assets/heliocentric.jpg'

class Header extends Component {
  render() {
    return (
      <header id="header" className="App-header container-outline">
        <h1>Boo Yah!</h1>
      <img src={featureImg} alt="Heliocentric Map" className="App-header-feature-img"/>
      </header>
    )
  }
}

export default Header
