import { Component } from 'react'

import Year from './Year'

class Footer extends Component {



  render() {
    return (
      <footer className="App-footer">
        <ul className="footer-nav">
          <li><a href="/">home</a></li>
          <li><a href="#main">main content</a></li>
        </ul>

        <p>&copy; <span id="yearTag"><Year /></span> Jim Carroll | <a href="https://github.com/pulamusic" target="_blank" rel="noreferrer">pulamusic</a></p>


      </footer>
    )
  }
}

export default Footer
