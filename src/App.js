
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav'
import Todos from './components/Todos'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Header />
        <Todos />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
