import React, { Component } from 'react'
import logo from '../assets/adinkra-sm.png'

class Nav extends Component {
  render() {
    return (
      <nav className="App-nav" id="navbar">
        <div className="App-nav-logo">
          <a href="/"><img src={logo} alt="Logo"/></a>
        </div>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="#main">main content</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
