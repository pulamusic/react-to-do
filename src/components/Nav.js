import React, { Component } from 'react'
import logo from '../assets/adinkra-sm.png'
// import FontAwesomeIcon from '../App'

class Nav extends Component {

  expandNav = () => {
    const x = document.getElementById("myLinks")
    let displayStyle = x.style.display
    return displayStyle === "block" ? displayStyle = "none" : displayStyle = "block"
  }

  render() {
    return (
      <nav className="App-nav" id="navbar">
        <div className="App-nav-logo">
          <a href="/"><img src={logo} alt="Logo"/></a>
        </div>
        <ul id="navList">
          <li><a href="/">home</a></li>
          <li><a href="#main">main content</a></li>
          <li><a href="https://pulamusic-space-app.netlify.app/" target="_blank" rel="noreferrer">space</a></li>
        </ul>

      </nav>
    )
  }
}

export default Nav

/*
<a href="#navbar" className="icon" onClick="expandNav()">
  <h4>icon</h4>
</a>
*/
