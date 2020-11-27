
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav'
import Todos from './components/Todos'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'buy an eraser',
        completed: false
      },
      {
        id: 3,
        title: 'don\'t be an idiot',
        completed: false
      }
    ]
  }

  render() {
    console.log(this.state.todos)
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
