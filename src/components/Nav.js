import React, { Component } from 'react'
import logo from '../assets/adinkra-sm.png'

class Nav extends Component {

  expandNav = () => {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
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
        </ul>
        <a href="javascript:void(0);" className="icon" onclick="expandNav()">
          <i class="fa fa-bars"></i>
        </a>
      </nav>
    )
  }
}

export default Nav
