
import React, { Component } from 'react'

import Todos from './components/Todos'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav'
// import TodoSect from './components/TodoSect'
import SectionMark from './components/SectionMark'
import SectionDiv from './components/SectionDiv'

class App extends Component {

  render() {

    return (
      <div className="outer-container">
        <Nav />
        <Header />
        <div className="outer-container container-outline">
          <div className="App-todo-header">
            <h1><SectionMark /> Todo</h1>
          </div>
          <div className="App-todo-list App-todo-container container-border-left">
            <Todos />
          </div>
          <div className="App-todo-footer">
            <SectionDiv url={'#main'} />
          </div>
        </div>
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
