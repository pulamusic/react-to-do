
import React, { Component } from 'react'

import TodoSect from './components/TodoSect'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav'

class App extends Component {

  render() {

    return (
      <div className="outer-container">
        <Nav />
        <Header />
        <TodoSect />
        <Main />
        <Footer />
      </div>
    )

  }
}

export default App
