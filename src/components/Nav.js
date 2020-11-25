import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav className="App-nav">
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="#main">main content</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
